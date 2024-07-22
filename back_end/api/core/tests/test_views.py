from .test_setup import TestSetUp
from ..models import CustomUser

class TestViews(TestSetUp):
    
    # by: Melque
    def teste_usuario_pode_registrar_sem_dados(self):
        res=self.client.post(self.register_url)
        #import pdb
        #pdb.set_trace()

        self.assertEqual(res.status_code, 400)
    
    # by: Melque
    def teste_usuario_pode_registrar_com_dados_validos(self):
        res=self.client.post(self.register_url, self.user_data, format="json")
        #import pdb
        #pdb.set_trace()

        self.assertEqual(res.status_code, 201)
    
    # by: Melque
    def teste_usuario_nao_pode_fazer_login_com_email_invalido(self):
        response=self.client.post(self.register_url, self.user_data, format="json")
        
        email=response.data['email']
        user = CustomUser.objects.get(email=email)
        user.is_verified = True
        user.save()
        
        res=self.client.post(self.login_url, self.user_data, format="json")
        
        self.assertEqual(res.status_code, 200)
    
    # by: Melque 
    def teste_get_cliente_por_id(self):
        res=self.client.post(self.cliente_url,self.client_data)
        
        resposta=res.json()
        id=resposta['id']
        
        responseGet = self.client.get(f"{self.cliente_url}{id}/")
        #print(responseGet.data)
        #import pdb
        #pdb.set_trace()
        self.assertEqual(responseGet.status_code, 200)

    # by: Melque
    def teste_update_de_dados_do_usuario_invalido(self):
        self.client.post(self.cliente_url,self.client_data)
        
        new_client_data={
            "cpf": "12345678650",
            "rg": "111957333",
            "nome": "José",
            "email": "jose@gmail.com",
            "numTelefone": "84996514363",
            "dataNascimento": "12/06/2002"
        }
        resp = self.client.post(self.cliente_url,new_client_data)

        response=resp.json()
        id=response['id']
        data_update={         
            "cpf": "12345678900",
        }
        
        resp = self.client.patch(f"{self.cliente_url}{id}/",data_update)
        self.assertEqual(resp.status_code, 400)

    # by: Melque
    def teste_nao_pode_deletar_cliente_com_id_invalido(self):
        resp = self.client.post(self.cliente_url,self.client_data)
        
        response=resp.json()
        id=response['id']
        
        resp = self.client.delete(f"{self.cliente_url}{id+1}/")
        self.assertEqual(resp.status_code, 404)

    # by: Melque
    def teste_nao_pode_cadastrar_clientes_com_cpf_iguais(self):
        self.client.post(self.cliente_url,self.client_data)

        new_client_data={
            "cpf": "12345678900",
            "rg": "111957333",
            "nome": "José",
            "email": "jose@gmail.com",
            "numTelefone": "84996514363",
            "dataNascimento": "12/06/2002"
        }

        resp = self.client.post(self.cliente_url,new_client_data)
        self.assertEqual(resp.status_code, 400)

    # by: Manu (patch/update)
    def teste_update_de_dados_do_usuario_valido(self):
        resp = self.client.post(self.cliente_url, self.client_data)
        
        response = resp.json()
        id = response['id']
        data_update = {         
            "nome": "José",
        }
        
        resp = self.client.patch(f"{self.cliente_url}{id}/", data_update)
        self.assertEqual(resp.status_code, 200)

    # by: Manu (delete)
    def teste_deletar_cliente_com_id_valido(self):
        resp = self.client.post(self.cliente_url, self.client_data)
        
        response = resp.json()
        id = response['id']
        
        resp = self.client.delete(f"{self.cliente_url}{id}/")
        self.assertEqual(resp.status_code, 204)

    # by: Manu (post)
    def teste_criar_cliente_com_dados_validos(self):
        valid_client_data = {
            "cpf": "12345678901",
            "rg": "222957333",
            "nome": "Ana",
            "email": "ana@gmail.com",
            "numTelefone": "84996514364",
            "dataNascimento": "10/10/1990"
        }
    
        res = self.client.post(self.cliente_url, valid_client_data)
        self.assertEqual(res.status_code, 201)

    # by: Manu (post)
    def teste_criar_cliente_com_dados_incompletos(self):
        incomplete_client_data = {
            "cpf": "12345678902",
            "rg": "333957333",
            "nome": "Carlos",
            "email": "",
            "numTelefone": "84996514365",
            "dataNascimento": "15/05/1985"
        }
        
        res = self.client.post(self.cliente_url, incomplete_client_data)
        self.assertEqual(res.status_code, 400)

    # by: Manu (get)
    def teste_obter_todos_os_clientes(self):
        res = self.client.post(self.cliente_url, self.client_data)
        
        response = self.client.get(self.cliente_url)
        self.assertEqual(response.status_code, 200)

    #by: Manu (get) - fiz pelo id inválido, pois Melque já havia implementado pelo válido antes
    def teste_obter_cliente_com_id_invalido(self):
        invalid_id = 9999
        
        response = self.client.get(f"{self.cliente_url}{invalid_id}/")
        self.assertEqual(response.status_code, 404)


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
    

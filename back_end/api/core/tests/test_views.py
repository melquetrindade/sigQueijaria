from .test_setup import TestSetUp
from ..models import CustomUser


class TestViews(TestSetUp):

    # by: Melque
    def teste_usuario_pode_registrar_sem_dados(self):
        res = self.client.post(self.register_url)
        # import pdb
        # pdb.set_trace()

        self.assertEqual(res.status_code, 400)

    # by: Melque
    def teste_usuario_pode_registrar_com_dados_validos(self):
        res = self.client.post(
            self.register_url, self.user_data, format="json")
        # import pdb
        # pdb.set_trace()

        self.assertEqual(res.status_code, 201)

    # by: Melque
    def teste_usuario_nao_pode_fazer_login_com_email_invalido(self):
        response = self.client.post(
            self.register_url, self.user_data, format="json")

        email = response.data['email']
        user = CustomUser.objects.get(email=email)
        user.is_verified = True
        user.save()

        res = self.client.post(self.login_url, self.user_data, format="json")

        self.assertEqual(res.status_code, 200)

    # by: Melque
    def teste_get_cliente_por_id(self):
        res = self.client.post(self.cliente_url, self.client_data)

        resposta = res.json()
        id = resposta['id']

        responseGet = self.client.get(f"{self.cliente_url}{id}/")
        # print(responseGet.data)
        # import pdb
        # pdb.set_trace()
        self.assertEqual(responseGet.status_code, 200)

    # by: Melque
    def teste_update_de_dados_do_usuario_invalido(self):
        self.client.post(self.cliente_url, self.client_data)

        new_client_data = {
            "cpf": "12345678650",
            "rg": "111957333",
            "nome": "José",
            "email": "jose@gmail.com",
            "numTelefone": "84996514363",
            "dataNascimento": "12/06/2002"
        }
        resp = self.client.post(self.cliente_url, new_client_data)

        response = resp.json()
        id = response['id']
        data_update = {
            "cpf": "12345678900",
        }

        resp = self.client.patch(f"{self.cliente_url}{id}/", data_update)
        self.assertEqual(resp.status_code, 400)

    # by: Melque
    def teste_nao_pode_deletar_cliente_com_id_invalido(self):
        resp = self.client.post(self.cliente_url, self.client_data)

        response = resp.json()
        id = response['id']

        resp = self.client.delete(f"{self.cliente_url}{id+1}/")
        self.assertEqual(resp.status_code, 404)

    # by: Melque
    def teste_nao_pode_cadastrar_clientes_com_cpf_iguais(self):
        self.client.post(self.cliente_url, self.client_data)

        new_client_data = {
            "cpf": "12345678900",
            "rg": "111957333",
            "nome": "José",
            "email": "jose@gmail.com",
            "numTelefone": "84996514363",
            "dataNascimento": "12/06/2002"
        }

        resp = self.client.post(self.cliente_url, new_client_data)
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

    # by: Manu (get) - fiz pelo id inválido, pois Melque já havia implementado pelo válido antes
    def teste_obter_cliente_com_id_invalido(self):
        invalid_id = 9999

        response = self.client.get(f"{self.cliente_url}{invalid_id}/")
        self.assertEqual(response.status_code, 404)

    # by: Felipe (post)
    def teste_adicionar_mercadoria_com_dados_validos(self):
        valid_merchandise_data = {
            "ownerFornecedor": 9,
            "quantidade": 300,
            "data": "22/07/2024",
            "valor": 600.0,
        }

        res = self.client.post(
            self.entradasMercadorias_url, valid_merchandise_data)
        self.assertEqual(res.status_code, 201)

    # by: Felipe (post)
    def teste_adicionar_mercadoria_com_dados_incompletos(self):
        incomplete_merchandise_data = {
            "ownerFornecedor": 1,
            "quantidade": 300,
            "data": "",
            "valor": 0,
        }

        res = self.client.post(self.entradasMercadorias_url,
                               incomplete_merchandise_data)
        self.assertEqual(res.status_code, 400)

    # by: Felipe (post)
    def teste_cadastrar_produtos_com_dados_validos(self):
        valid_product_data = {
            "codigoBarras": "1231241231243",
            "tipo": "Azul",
            "nome": "Queijo Gorgonzola",
            "dataValidade": "27/08/2024",
            "qtdMinima": 15,
            "quantidade": 300,
            "valor": 5,
            "ownerFornecedor": 9,
            "data": "22/07/2024",
            "valor": 600,
        }

        res = self.client.post(self.produtos_url, valid_product_data)
        self.assertEqual(res.status_code, 201)

    # by: Felipe (post)
    def teste_cadastrar_produtos_com_dados_incompletos(self):
        incomplete_product_data = {
            "codigoBarras": "",
            "tipo": "Azul",
            "nome": "Queijo Gorgonzola",
            "dataValidade": "27/08/2024",
            "qtdMinima": 15,
            "quantidade": 300,
            "valor": 5,
            "ownerFornecedor": "",
            "data": "22/07/2024",
            "valor": 600,
        }

        res = self.client.post(self.produtos_url, incomplete_product_data)
        self.assertEqual(res.status_code, 400)

    # by: Isa (patch/update)
    def teste_update_de_dados_do_funcionario_valido(self):
        resp = self.client.post(self.funcionario_url, self.employee_data)

        response = resp.json()
        id = response['id']
        data_update = {
            "nome": "José",
        }

        resp = self.client.patch(f"{self.funcionario_url}{id}/", data_update)
        self.assertEqual(resp.status_code, 200)

    # by: Isa (delete)
    def teste_deletar_funcionario_com_id_valido(self):
        resp = self.client.post(self.funcionario_url, self.employee_data)

        response = resp.json()
        id = response['id']

        resp = self.client.delete(f"{self.funcionario_url}{id}/")
        self.assertEqual(resp.status_code, 204)

    # by: Isa (post)
    def teste_criar_funcionario_com_dados_validos(self):
        valid_employee_data = {
            "cpf": "12345678999",
            "cargo": "Caixa",
            "salario": "1500",
            "cargaHoraria": "8",
            "nome": "Jorge",
            "email": "jorge@gmail.com",
            "numTelefone": "84998114443",
            "dataNascimento": "12/07/1999"
        }

        res = self.client.post(self.funcionario_url, valid_employee_data)
        self.assertEqual(res.status_code, 201)

    # by: Isa (post)
    def teste_criar_funcionario_com_dados_incompletos(self):
        incomplete_employee_data = {
            "cpf": "12345678998",
            "cargo": "Caixa",
            "salario": "1000",
            "cargaHoraria": "8",
            "nome": "Pedro",
            "email": "",
            "numTelefone": "84998214443",
            "dataNascimento": "22/10/1999"
        }

        res = self.client.post(self.funcionario_url, incomplete_employee_data)
        self.assertEqual(res.status_code, 400)

    # by: Isa (get)
    def teste_obter_todos_os_funcionario(self):
        res = self.client.post(self.funcionario_url, self.employee_data)

        response = self.client.get(self.funcionario_url)
        self.assertEqual(response.status_code, 200)

    # by: Isa (get) - fiz pelo id inválido, pois Melque já havia implementado pelo válido antes
    def teste_obter_funcionario_com_id_invalido(self):
        invalid_id = 9899

        response = self.client.get(f"{self.funcionario_url}{invalid_id}/")
        self.assertEqual(response.status_code, 404)

    # by: Isa (get)
    def teste_get_funcionario_por_id(self):
        res = self.client.post(self.funcionario_url, self.employee_data)

        response = res.json()
        id = response['id']

        response_get = self.client.get(f"{self.funcionario_url}{id}/")
        self.assertEqual(response_get.status_code, 200)

def teste_cadastrar_produtos_com_dados_invalidos(self):
        invalid_product_data = {
            "codigoBarras": "1231241231243",
            "tipo": "Azul",
            "nome": "Queijo Gorgonzola",
            "dataValidade": "27/08/2024",
            "qtdMinima": 15,
            "quantidade": 300,
            "valor": '',
            "ownerFornecedor": 9,
            "data": "22/07/2024",
            "valor": 600,
        }

        res = self.client.post(self.produtos_url, invalid_product_data)
        self.assertEqual(res.status_code, 400)

def teste_get_produto_por_id(self):
        product_data1 = {
            "codigoBarras": "1231241231243",
            "tipo": "Azul",
            "nome": "Queijo Gorgonzola",
            "dataValidade": "27/08/2024",
            "qtdMinima": 15,
            "quantidade": 300,
            "valor": 9,
            "ownerFornecedor": 9,
            "data": "22/07/2024",
            "valor": 600,
        }

        product_data2 = {
            "codigoBarras": "123124123124",
            "tipo": "Azul",
            "nome": "Queijo Parmesao",
            "dataValidade": "28/08/2024",
            "qtdMinima": 15,
            "quantidade": 30,
            "valor": 100,
            "ownerFornecedor": 9,
            "data": "22/07/2024",
            "valor": 20,
        }
        self.client.post(self.produtos_url, product_data1)
        res = self.client.post(self.produtos_url, product_data2)
        
        resposta = res.json()
        id = resposta['id']

        responseGet = self.client.get(f"{self.produtos_url}{id}/")
        # print(responseGet.data)
        # import pdb
        # pdb.set_trace()
        self.assertEqual(responseGet.status_code, 400)

def teste_update_de_dados_do_produto_invalido(self):
        product_data2 = {
            "codigoBarras": "123124123124",
            "tipo": "Azul",
            "nome": "Queijo Parmesao",
            "dataValidade": "28/08/2024",
            "qtdMinima": 15,
            "quantidade": 30,
            "valor": 100,
            "ownerFornecedor": 9,
            "data": "22/07/2024",
            "valor": 20,
        }
        resp = self.client.post(self.produtos_url, product_data2)

        response = resp.json()
        id = response['id']
        data_update = {
            "valor": 50,
        }

        resp = self.client.patch(f"{self.produtos_url}{id}/", data_update)
        self.assertEqual(resp.status_code, 400)

def teste_nao_pode_deletar_produto_com_id_invalido(self):
    product_data2 = {
            "codigoBarras": "123124123124",
            "tipo": "Azul",
            "nome": "Queijo Parmesao",
            "dataValidade": "28/08/2024",
            "qtdMinima": 15,
            "quantidade": 30,
            "valor": 100,
            "ownerFornecedor": 9,
            "data": "22/07/2024",
            "valor": 20,
        }
    resp = self.client.post(self.produtos_url, product_data2)

    response = resp.json()
    id = response['id']

    resp = self.client.delete(f"{self.product_url}{id+1}/")
    self.assertEqual(resp.status_code, 404)
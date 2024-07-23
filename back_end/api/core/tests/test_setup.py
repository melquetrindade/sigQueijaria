from rest_framework.test import APITestCase
from django.urls import reverse
import os
from dotenv import load_dotenv

# Carrega variáveis de ambiente do arquivo .env
load_dotenv()


class TestSetUp(APITestCase):

    def setUp(self):
        self.register_url = reverse("register")
        self.login_url = reverse("token_obtain_pair")
        self.cliente_url = reverse("clientes-list")
        self.entradasMercadorias_url = reverse("entradasMercadorias-list")
        self.produtos_url = reverse("produtos-list")
        self.funcionario_url = reverse("funcionarios-list")

        self.user_data = {
            "email": "maria@gmail.com",
            "username": "Maria",
            "password": os.getenv('PASSWORD'),
            "password2": os.getenv('PASSWORD2')
        }

        self.client_data = {
            "cpf": "12345678900",
            "rg": "111222333",
            "nome": "Maria",
            "email": "maria@gmail.com",
            "numTelefone": "84998114363",
            "dataNascimento": "12/06/2002"
        }

        self.merchandise_data = {
            "ownerFornecedor": 9,
            "quantidade": 300,
            "data": "22/07/2024",
            "valor": 600,
        }

        self.product_data = {
            "codigoBarras": "1231241232278",
            "tipo": "Branco",
            "nome": "Queijo de Ricota",
            "dataValidade": "27/08/2024",
            "qtdMinima": 15,
            "quantidade": 200,
            "valor": 7,
            "ownerFornecedor": 9,
            "data": "22/07/2024",
            "valor": 250,
        }

        self.employee_data = {
            "cpf": "12345678900",
            "cargo": "Caixa",
            "salario": "25000",
            "cargaHoraria": "8",
            "nome": "João",
            "email": "joao@gmail.com",
            "numTelefone": "84998114363",
            "dataNascimento": "12/06/2000"
        }

        return super().setUp()

    def tearDown(self):
        return super().tearDown()

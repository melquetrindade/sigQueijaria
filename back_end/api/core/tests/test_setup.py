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

        self.user_data={
            "email": "maria@gmail.com",
            "username": "Maria",
            "password": os.getenv('PASSWORD'),
            "password2": os.getenv('PASSWORD2')
        }

        self.client_data={
            "cpf": "12345678900",
            "rg": "111222333",
            "nome": "Maria",
            "email": "maria@gmail.com",
            "numTelefone": "84998114363",
            "dataNascimento": "12/06/2002"
        }

        return super().setUp()
    
    def tearDown(self):
        return super().tearDown()
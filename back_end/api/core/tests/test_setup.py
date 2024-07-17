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

        self.user_data={
            "email": "maria@gmail.com",
            "username": "Maria",
            "password": os.getenv('PASSWORD'),
            "password2": os.getenv('PASSWORD2')
        }

        return super().setUp()
    
    def tearDown(self):
        return super().tearDown()
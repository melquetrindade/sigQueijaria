from rest_framework.test import APITestCase
from django.urls import reverse

class TestSetUp(APITestCase):

    def setUp(self):
        self.register_url = reverse("register")
        self.login_url = reverse("token_obtain_pair")

        self.user_data={
            "email": "maria@gmail.com",
            "username": "Maria",
            "password": "12345678",
            "password2": "12345678"
        }

        return super().setUp()
    
    def tearDown(self):
        return super().tearDown()

    
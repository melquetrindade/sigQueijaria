from .test_setup import TestSetUp
from ..models import CustomUser

class TestViews(TestSetUp):
    # teste para verficar que dá erro
    '''
    def teste_cliente_pode_registrar_sem_dados(self):
        res=self.client.post(self.register_url)
        import pdb
        pdb.set_trace()

        self.assertEqual(res.status_code, 400)
    '''
    '''
    def teste_cliente_pode_registrar(self):
        res=self.client.post(self.register_url, self.user_data, format="json")
        #import pdb
        #pdb.set_trace()

        self.assertEqual(res.status_code, 201)
    '''

    def teste_usuario_nao_pode_fazer_login_com_email_invalido(self):
        response=self.client.post(self.register_url, self.user_data, format="json")
        email=response.data['email']
        user = CustomUser.objects.get(email=email)
        user.is_verified = True
        user.save()
        res=self.client.post(self.login_url, self.user_data, format="json")
        import pdb
        pdb.set_trace()
        

        self.assertEqual(res.status_code, 200)
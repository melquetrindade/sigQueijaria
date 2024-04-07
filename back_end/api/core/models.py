from django.db import models

# Create your models here.
class Caixa_DiaCaixa(models.Model):
    ownerCaixa = models.ForeignKey(Caixa, on_delete=models.CASCADE)
    ownerDiaCaixa = models.OneToOneField(DiaCaixa, on_delete=models.CASCADE)

    def __str__(self):
        return self.ownerCaixa
    
class Pagamento(models.Model):
    ownerConta = models.OneToOneField(Conta, on_delete=models.CASCADE)
    ownerCaixa = models.ForeignKey(Caixa, on_delete=models.SET_NULL, null=True)
    data = models.CharField(max_length=55)
    valor = models.FloatField()

    def __str__(self):
        return self.data
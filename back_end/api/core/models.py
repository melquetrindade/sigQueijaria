from django.db import models

# Create your models here.
class Pessoa(models.Model):
    nome = models.CharField(max_length=255)
    email = models.CharField(max_length=255, unique=True)
    numTelefone = models.CharField(max_length=11, unique=True)
    status = models.BooleanField(default=True)
    dataNascimento = models.CharField(max_length=15)

    def __str__(self):
        return self.nome

class Cliente(Pessoa):
    cpf = models.CharField(max_length=11, unique=True)
    rg = models.CharField(max_length=9, unique=True)

    def __str__(self):
        return self.cpf

class Fornecedor(Pessoa):
    cnpj = models.CharField(max_length=14, unique=True)

    def __str__(self):
        return self.cnpj

class Funcionario(Pessoa):
    cpf = models.CharField(max_length=11, unique=True)
    cargo = models.CharField(max_length=55)
    salario = models.FloatField()
    cargaHoraria = models.FloatField()

    def __str__(self):
        return self.cpf
        
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
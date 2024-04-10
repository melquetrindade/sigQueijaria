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
    
class EntradaMercadoria_MetodoPagamento(models.Model):
    ownerEntradaMercadoria = models.OneToOneField(EntradaMercadoria, on_delete=models.CASCADE)
    ownerMetodoPagamento = models.ManyToManyField(MetodoPagamento)

    def __str__(self):
        return self.ownerEntradaMercadoria
    
class Venda(models.Model):
    cliente = models.ForeignKey(Cliente, on_delete=models.CASCADE)
    data = models.CharField(max_length=55)
    total = models.FloatField()

    def __str__(self):
        return self.data
    
class VendaProduto(models.Model):
    ownerVenda = models.ForeignKey(Venda, on_delete=models.CASCADE)
    ownerProduto = models.ForeignKey(Produto, on_delete=models.SET_NULL, null=True)
    quantidade = models.IntegerField()
    valor = models.FloatField()

    def __str__(self):
        return self.valor

class Venda_MetodoPagamento(models.Model):
    ownerVenda = models.OneToOneField(Venda, on_delete=models.CASCADE)
    ownerMetodoPagamento = models.ManyToManyField(MetodoPagamento)

    def __str__(self):
        return self.ownerVenda
    
class NotaFiscal(models.Model):
    ownerVenda = models.OneToOneField(Venda, on_delete=models.CASCADE)
    data = models.CharField(max_length=55)
    listVendaProduto = models.ManyToManyField(VendaProduto)

    def __str__(self):
        return self.ownerVenda

class Conta(models.Model):
    ownerVenda = models.OneToOneField(Venda, on_delete=models.SET_NULL, null=True)
    valor = models.FloatField()
    dataVencimento = models.CharField(max_length=55)
    tipoReceber = models.BooleanField()
    ownerEntradaMercadoria = models.OneToOneField(EntradaMercadoria, on_delete=models.SET_NULL, null=True)

    def __str__(self):
        return self.dataVencimento

class Caixa(models.Model):
    valorInicial = models.FloatField()
    valorAtual = models.FloatField()
    dataHoraAberturaAtual = models.CharField(max_length=55)
    isOpen = models.BooleanField(default=False)

    def __str__(self):
        return self.valorInicial

class DiaCaixa(models.Model):
    dataHoraAbertura = models.CharField(max_length=55)
    dataHoraEncerramento = models.CharField(max_length=55)
    valorInicial = models.FloatField()
    valorFinal = models.FloatField()

    def __str__(self):
        return self.valorInicial

        
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
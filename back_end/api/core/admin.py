from django.contrib import admin
from .models import Pessoa, Cliente, Fornecedor, Funcionario, Caixa_DiaCaixa, Pagamento, NotaFiscal, Caixa, Conta, DiaCaixa

# Register your models here.
admin.site.register(Pessoa)
admin.site.register(Cliente)
admin.site.register(Fornecedor)
admin.site.register(Funcionario)
admin.site.register(Caixa_DiaCaixa)
admin.site.register(Pagamento)
admin.site.register(NotaFiscal)
admin.site.register(Conta)
admin.site.register(Caixa)
admin.site.register(DiaCaixa)
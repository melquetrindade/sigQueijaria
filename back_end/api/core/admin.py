from django.contrib import admin
from .models import Pessoa, Cliente, Fornecedor, Funcionario, Caixa_DiaCaixa, Pagamento, NotaFiscal, Caixa, Conta, DiaCaixa, Venda, VendaProduto, Venda_MetodoPagamento, EntradaMercadoria_MetodoPagamento, Produto, EntradaMercadoria, EntradaMercadoria_Produto, MetodoPagamento

# Register your models here.
admin.site.register(Pessoa)
admin.site.register(Cliente)
admin.site.register(Fornecedor)
admin.site.register(Funcionario)
admin.site.register(Venda)
admin.site.register(VendaProduto)
admin.site.register(Venda_MetodoPagamento)
admin.site.register(Caixa_DiaCaixa)
admin.site.register(Pagamento)
admin.site.register(NotaFiscal)
admin.site.register(Conta)
admin.site.register(Caixa)
admin.site.register(DiaCaixa)
admin.site.register(EntradaMercadoria_MetodoPagamento)
admin.site.register(Produto)
admin.site.register(EntradaMercadoria)
admin.site.register(EntradaMercadoria_Produto)
admin.site.register(MetodoPagamento)

from rest_framework import serializers
from .models import Cliente, Fornecedor, Funcionario, Caixa_DiaCaixa, Pagamento, NotaFiscal, Caixa, Conta, DiaCaixa, Venda, VendaProduto, Venda_MetodoPagamento, EntradaMercadoria_MetodoPagamento

class ClienteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cliente
        fields = ['id', 'cpf', 'rg', 'nome', 'email', 'numTelefone', 'status', 'dataNascimento']

class FornecedorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Fornecedor
        fields = ['id', 'cnpj', 'nome', 'email', 'numTelefone', 'status', 'dataNascimento']

class FuncionarioSerializer(serializers.ModelSerializer):
    class Meta:
        model = Funcionario
        fields = ['id', 'cpf', 'cargo', 'salario', 'cargaHoraria', 'nome', 'email', 'numTelefone', 'status', 'dataNascimento']

class VendaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Venda
        fields = ['id', 'cliente', 'data', 'total']

class VendaProdutoSerializer(serializers.ModelSerializer):
    class Meta:
        model = VendaProduto
        fields = ['id', 'ownerVenda', 'ownerProduto', 'quantidade', 'valor']

class CaixaDiaCaixaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Caixa_DiaCaixa
        fields = ['id', 'ownerCaixa', 'ownerDiaCaixa']

class PagamentoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Pagamento
        fields = ['id', 'ownerCaixa', 'ownerConta', 'data', 'valor']

class VendaMetodoPagamentoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Venda_MetodoPagamento
        fields = ['id', 'ownerVenda', 'ownerMetodoPagamento']

class NotaFiscalSerializer(serializers.ModelSerializer):
    class Meta:
        model = NotaFiscal
        fields = ['id', 'ownerVenda', 'data', 'listVendaProduto']

    
class ContaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Conta
        fields = ['id', 'ownerVenda', 'valor', 'dataVencimento', 'tipoReceber', 'ownerEntradaMercadoria']

class CaixaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Caixa
        fields = ['id', 'valorInicial', 'valorAtual', 'dataHoraAberturaAtual', 'isOpen']

class DiaCaixaSerializer(serializers.ModelSerializer):
    class Meta:
        model = DiaCaixa
        fields = ['id', 'dataHoraAbertura', 'dataHoraEncerramento', 'valorInicial', 'valorFinal']

class EntradaMercadoriaMetodoPagamentoSerializer(serializers.ModelSerializer):
    class Meta:
        model = EntradaMercadoria_MetodoPagamento
        fields = ['id', 'ownerEntradaMercadoria', 'ownerMetodoPagamento']
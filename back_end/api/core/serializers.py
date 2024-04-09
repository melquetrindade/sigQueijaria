from rest_framework import serializers
from .models import Cliente, Fornecedor, Funcionario, Caixa_DiaCaixa, Pagamento, NotaFiscal, Caixa, Conta, DiaCaixa

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

class CaixaDiaCaixaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Caixa_DiaCaixa
        fields = ['id', 'ownerCaixa', 'ownerDiaCaixa']

class PagamentoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Pagamento
        fields = ['id', 'ownerCaixa', 'ownerConta', 'data', 'valor']

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
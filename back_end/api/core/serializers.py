from rest_framework import serializers
from .models import Cliente, Fornecedor, Funcionario, Caixa_DiaCaixa, Pagamento

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
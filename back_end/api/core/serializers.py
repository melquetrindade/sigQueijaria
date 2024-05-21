from rest_framework import serializers
from .models import Cliente, Fornecedor, Funcionario, Caixa_DiaCaixa, Pagamento, NotaFiscal, Caixa, Conta, DiaCaixa, Venda, VendaProduto, Venda_MetodoPagamento, EntradaMercadoria_MetodoPagamento, Produto, EntradaMercadoria, EntradaMercadoria_Produto, MetodoPagamento, Estado, Cidade, Bairro, Endereco

from .models import CustomUser
# serializers para autenticação

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ['email', 'username', 'password', 'password2']
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        user = CustomUser(
            email=validated_data['email'],
            username=validated_data['username']
        )
        user.set_password(validated_data['password'])
        user.save()
        return user




# serializers para o banco de dados
class ClienteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cliente
        fields = ['id', 'cpf', 'rg', 'nome', 'email', 'numTelefone', 'status', 'dataNascimento', 'dataDoDesativo']

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
        fields = ['id', 'ownerVenda', 'ownerProduto', 'quantidade', 'valor', 'status', 'dataDoDesativo']

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

class ProdutoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Produto
        fields = ['id', 'codigoBarras', 'tipo', 'nome', 'dataValidade', 'qtdMinima', 'quantidade', 'valor', 'status']

class EntradaMercadoriaSerializer(serializers.ModelSerializer):
    class Meta:
        model = EntradaMercadoria
        fields = ['id', 'ownerFornecedor', 'quantidade', 'data', 'valor']

class EntradaMercadoriaProdutoSerializer(serializers.ModelSerializer):
    class Meta:
        model = EntradaMercadoria_Produto
        fields = ['id', 'ownerProduto', 'ownerEntradaMercadoria']

class MetodoPagamentoSerializer(serializers.ModelSerializer):
    class Meta:
        model = MetodoPagamento
        fields = ['id', 'metodo', 'valor']

class EstadoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Estado
        fields = ['id', 'owner', 'nome']

class CidadeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cidade
        fields = ['id', 'owner', 'nome', 'cep']

class BairroSerializer(serializers.ModelSerializer):
    class Meta:
        model = Bairro
        fields = ['id', 'owner', 'nome']

class EnderecoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Endereco
        fields = ['id', 'owner', 'rua', 'numCasa', 'complemento']

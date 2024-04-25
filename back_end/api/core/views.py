from rest_framework import viewsets
from .models import Cliente, Fornecedor, Funcionario, Caixa_DiaCaixa, Pagamento, NotaFiscal, Caixa, Conta, DiaCaixa, Venda, VendaProduto, Venda_MetodoPagamento, EntradaMercadoria_MetodoPagamento, Produto, EntradaMercadoria, EntradaMercadoria_Produto, MetodoPagamento, Estado, Cidade, Bairro, Endereco
from .serializers import ClienteSerializer, FornecedorSerializer, FuncionarioSerializer, CaixaDiaCaixaSerializer, PagamentoSerializer, NotaFiscalSerializer, CaixaSerializer, ContaSerializer, DiaCaixaSerializer, VendaSerializer, VendaProdutoSerializer, VendaMetodoPagamentoSerializer, EntradaMercadoriaMetodoPagamentoSerializer, ProdutoSerializer, EntradaMercadoriaSerializer, EntradaMercadoriaProdutoSerializer, MetodoPagamentoSerializer, EstadoSerializer, CidadeSerializer, BairroSerializer, EnderecoSerializer


# views para autenticação
from rest_framework.response import Response
from rest_framework.decorators import api_view
#from .serializers import UserSerializer
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
#from rest_framework import status
#from rest_framework.views import APIView
from rest_framework import generics
from .serializers import UserSerializer


class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)

        token['email'] = user.username
        #token['username'] = user.username -> Antes era assim

        return token

class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer

@api_view(['GET'])
def getToutes(request):
    routes = [
        '/api/token',
        '/api/token/refresh'
    ]

    return Response(routes)

class CreateUserView(generics.CreateAPIView):
    serializer_class = UserSerializer


# Create your views here.
class ClienteViewSet(viewsets.ModelViewSet):
    queryset = Cliente.objects.all()
    serializer_class = ClienteSerializer

class FornecedorViewSet(viewsets.ModelViewSet):
    queryset = Fornecedor.objects.all()
    serializer_class = FornecedorSerializer

class FuncionarioViewSet(viewsets.ModelViewSet):
    queryset = Funcionario.objects.all()
    serializer_class = FuncionarioSerializer

class VendaViewSet(viewsets.ModelViewSet):
    queryset = Venda.objects.all()
    serializer_class = VendaSerializer

class VendaProdutoViewSet(viewsets.ModelViewSet):
    queryset = VendaProduto.objects.all()
    serializer_class = VendaProdutoSerializer
    
class Caixa_DiaCaixaViewSet(viewsets.ModelViewSet):
    queryset = Caixa_DiaCaixa.objects.all()
    serializer_class = CaixaDiaCaixaSerializer

class PagamentoViewSet(viewsets.ModelViewSet):
    queryset = Pagamento.objects.all()
    serializer_class = PagamentoSerializer

class VendaMetodoPagamentoViewSet(viewsets.ModelViewSet):
    queryset = Venda_MetodoPagamento.objects.all()
    serializer_class = VendaMetodoPagamentoSerializer

class NotaFiscalViewSet(viewsets.ModelViewSet):
    queryset = NotaFiscal.objects.all()
    serializer_class = NotaFiscalSerializer

class ContaViewSet(viewsets.ModelViewSet):
    queryset = Conta.objects.all()
    serializer_class = ContaSerializer

class CaixaViewSet(viewsets.ModelViewSet):
    queryset = Caixa.objects.all()
    serializer_class = CaixaSerializer

class DiaCaixaViewSet(viewsets.ModelViewSet):
    queryset = DiaCaixa.objects.all()
    serializer_class = DiaCaixaSerializer

class EntradaMercadoriaMetodoPagamentoViewSet(viewsets.ModelViewSet):
    queryset = EntradaMercadoria_MetodoPagamento.objects.all()
    serializer_class = EntradaMercadoriaMetodoPagamentoSerializer

class ProdutoViewSet(viewsets.ModelViewSet):
    queryset = Produto.objects.all()
    serializer_class = ProdutoSerializer

class EntradaMercadoriaViewSet(viewsets.ModelViewSet):
    queryset = EntradaMercadoria.objects.all()
    serializer_class = EntradaMercadoriaSerializer

class EntradaMercadoria_ProdutoViewSet(viewsets.ModelViewSet):
    queryset = EntradaMercadoria_Produto.objects.all()
    serializer_class = EntradaMercadoriaProdutoSerializer

class MetodoPagamentoViewSet(viewsets.ModelViewSet):
    queryset = MetodoPagamento.objects.all()
    serializer_class = MetodoPagamentoSerializer

class EstadoViewSet(viewsets.ModelViewSet):
    queryset = Estado.objects.all()
    serializer_class = EstadoSerializer

class CidadeViewSet(viewsets.ModelViewSet):
    queryset = Cidade.objects.all()
    serializer_class = CidadeSerializer

class BairroViewSet(viewsets.ModelViewSet):
    queryset = Bairro.objects.all()
    serializer_class = BairroSerializer

class EnderecoViewSet(viewsets.ModelViewSet):
    queryset = Endereco.objects.all()
    serializer_class = EnderecoSerializer
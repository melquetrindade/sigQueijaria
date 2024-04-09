from rest_framework import viewsets
from .models import Cliente, Fornecedor, Funcionario, Caixa_DiaCaixa, Pagamento, NotaFiscal, Caixa, Conta, DiaCaixa
from .serializers import ClienteSerializer, FornecedorSerializer, FuncionarioSerializer, CaixaDiaCaixaSerializer, PagamentoSerializer, NotaFiscalSerializer, CaixaSerializer, ContaSerializer, DiaCaixaSerializer

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
    
class Caixa_DiaCaixaViewSet(viewsets.ModelViewSet):
    queryset = Caixa_DiaCaixa.objects.all()
    serializer_class = CaixaDiaCaixaSerializer

class PagamentoViewSet(viewsets.ModelViewSet):
    queryset = Pagamento.objects.all()
    serializer_class = PagamentoSerializer

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
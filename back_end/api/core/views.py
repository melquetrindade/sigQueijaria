from rest_framework import viewsets
from .models import Caixa_DiaCaixa, Pagamento
from .serializers import CaixaDiaCaixaSerializer, PagamentoSerializer

# Create your views here.
class Caixa_DiaCaixaViewSet(viewsets.ModelViewSet):
    queryset = Caixa_DiaCaixa.objects.all()
    serializer_class = CaixaDiaCaixaSerializer

class PagamentoViewSet(viewsets.ModelViewSet):
    queryset = Pagamento.objects.all()
    serializer_class = PagamentoSerializer
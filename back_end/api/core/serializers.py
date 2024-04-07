from rest_framework import serializers
from .models import Caixa_DiaCaixa, Pagamento

class CaixaDiaCaixaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Caixa_DiaCaixa
        fields = ['id', 'ownerCaixa', 'ownerDiaCaixa']

class PagamentoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Pagamento
        fields = ['id', 'ownerCaixa', 'ownerConta', 'data', 'valor']
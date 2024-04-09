from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from core.views import  ClienteViewSet, FornecedorViewSet, FuncionarioViewSet, Caixa_DiaCaixaViewSet, PagamentoViewSet,  NotaFiscalViewSet,  ContaViewSet, CaixaViewSet, DiaCaixaViewSet

router = routers.DefaultRouter()
router.register(r'clientes', ClienteViewSet)
router.register(r'fornecedores', FornecedorViewSet)
router.register(r'funcionarios', FuncionarioViewSet)
router.register(r'caixasDiasCaixas', Caixa_DiaCaixaViewSet)
router.register(r'pagamentos', PagamentoViewSet)
router.register(r'notasFiscais', NotaFiscalViewSet)
router.register(r'contas', ContaViewSet)
router.register(r'caixas', CaixaViewSet)
router.register(r'diasCaixas', DiaCaixaViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('admin/', admin.site.urls),
    path('api-auth/', include('rest_framework.urls'))
]

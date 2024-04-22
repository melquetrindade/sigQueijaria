from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from core.views import CreateUserView
from core.views import  ClienteViewSet, FornecedorViewSet, FuncionarioViewSet, Caixa_DiaCaixaViewSet, PagamentoViewSet,  NotaFiscalViewSet,  ContaViewSet, CaixaViewSet, DiaCaixaViewSet, VendaViewSet, VendaProdutoViewSet, VendaMetodoPagamentoViewSet, EntradaMercadoriaMetodoPagamentoViewSet, ProdutoViewSet, EntradaMercadoriaViewSet, EntradaMercadoria_ProdutoViewSet, MetodoPagamentoViewSet, EstadoViewSet, CidadeViewSet, BairroViewSet, EnderecoViewSet

router = routers.DefaultRouter()
router.register(r'clientes', ClienteViewSet)
router.register(r'fornecedores', FornecedorViewSet)
router.register(r'funcionarios', FuncionarioViewSet)
router.register(r'vendas', VendaViewSet)
router.register(r'vendasProdutos', VendaProdutoViewSet)
router.register(r'vendasMetodosPagamentos', VendaMetodoPagamentoViewSet)
router.register(r'caixasDiasCaixas', Caixa_DiaCaixaViewSet)
router.register(r'pagamentos', PagamentoViewSet)
router.register(r'notasFiscais', NotaFiscalViewSet)
router.register(r'contas', ContaViewSet)
router.register(r'caixas', CaixaViewSet)
router.register(r'diasCaixas', DiaCaixaViewSet)
router.register(r'entradasMercadoriasMetodosPagamentos', EntradaMercadoriaMetodoPagamentoViewSet)
router.register(r'produtos', ProdutoViewSet)
router.register(r'entradasMercadorias', EntradaMercadoriaViewSet)
router.register(r'entradasMercadoriasProdutos', EntradaMercadoria_ProdutoViewSet)
router.register(r'metodosPagamentos', MetodoPagamentoViewSet)
router.register(r'estados', EstadoViewSet)
router.register(r'cidades', CidadeViewSet)
router.register(r'bairros', BairroViewSet)
router.register(r'enderecos', EnderecoViewSet)


urlpatterns = [
    path('', include(router.urls)),
    path('admin/', admin.site.urls),
    path('api-auth/', include('rest_framework.urls')),
    path('register/', CreateUserView.as_view(), name='register'),
    path('api/', include('core.urls')),
]

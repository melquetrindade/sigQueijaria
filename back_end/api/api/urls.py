from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from core.views import Caixa_DiaCaixaViewSet, PagamentoViewSet

router = routers.DefaultRouter()
router.register(r'caixasDiasCaixas', Caixa_DiaCaixaViewSet)
router.register(r'pagamentos', PagamentoViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('admin/', admin.site.urls),
    path('api-auth/', include('rest_framework.urls'))
]

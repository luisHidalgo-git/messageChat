# backend/urls.py

from django.contrib import admin
from django.urls import path, include
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from messaging.views import RegisterView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('messaging.urls')),  # Incluir las rutas de la aplicación
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),  # Endpoint para obtener el token
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),  # Endpoint para refrescar el token
    path('api/register/', RegisterView.as_view(), name='register'),
    path('', include('messaging.urls')),
]
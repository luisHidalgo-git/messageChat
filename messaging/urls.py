# messaging/urls.py

from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import UserViewSet, ConversationViewSet, MessageViewSet, RegisterView

router = DefaultRouter()
router.register(r'users', UserViewSet)  # Endpoint para obtener usuarios
router.register(r'conversations', ConversationViewSet)  # Endpoint para conversaciones
router.register(r'messages', MessageViewSet)  # Endpoint para mensajes

urlpatterns = [
    path('api/', include(router.urls)),  # Incluye las rutas del router
    path('api/register/', RegisterView.as_view(), name='register'),  # Endpoint para registro
]
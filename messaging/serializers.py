# messaging/serializers.py

from django.contrib.auth.models import User
from rest_framework import serializers
from .models import Conversation, Message  # Asegúrate de que estos modelos estén importados

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'password', 'first_name', 'last_name', 'email', 'is_active', 'is_staff', 'is_superuser']
        extra_kwargs = {
            'password': {'write_only': True},
            'is_active': {'required': False},  # Puedes establecer un valor predeterminado
            'is_staff': {'required': False},    # Puedes establecer un valor predeterminado
            'is_superuser': {'required': False} # Puedes establecer un valor predeterminado
        }

    def create(self, validated_data):
        user = User(**validated_data)
        user.set_password(validated_data['password'])  # Asegúrate de que la contraseña se almacene de forma segura
        user.save()
        return user

class ConversationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Conversation
        fields = '__all__'  # O especifica los campos que deseas incluir

class MessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Message
        fields = '__all__'  # O especifica los campos que deseas incluir
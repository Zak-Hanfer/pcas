from rest_framework.serializers import ModelSerializer,ReadOnlyField
from .models import *
from rest_framework import serializers
#from allauth.account.adapter import get_adapter
from pcas import settings
#from allauth.account.utils import setup_user_email

class WilayaSeria(ModelSerializer):
    class Meta:
        model=Wilaya
        fields=('__all__')
class CommuneSeria(ModelSerializer):
    class Meta:
        model=Commune
        fields=('__all__')

class AnnonceSeria(ModelSerializer):
    adresse_detail = ReadOnlyField(source='adresse.NomCommune')
    class Meta:
        model=Annonce
        fields=('__all__')

#--------------------------#
from rest_framework import serializers
from .models import User


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['name', 'email','telephone', 'password']
        extra_kwargs = {
            'password': {'write_only': True}
        }

    def create(self, validated_data):
        password = validated_data.pop('password', None)
        instance = self.Meta.model(**validated_data)
        if password is not None:
            instance.set_password(password)
        instance.save()
        return instance
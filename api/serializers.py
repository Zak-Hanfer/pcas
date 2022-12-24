from rest_framework.serializers import ModelSerializer,ReadOnlyField
from .models import *


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
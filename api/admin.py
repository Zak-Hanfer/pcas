from django.contrib import admin
from .models import *
#from .models import User

from django.contrib import admin
# Register your models here.
admin.site.register(User)
admin.site.register(Annonce)
admin.site.register(Wilaya)
admin.site.register(Commune)
admin.site.register(BienImmob)
admin.site.register(Adresse)

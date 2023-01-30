from django.db import models
import uuid
from .constants import *
from django.contrib.auth.models import PermissionsMixin,AbstractUser
from django.contrib.auth.base_user import BaseUserManager, AbstractBaseUser
from django.utils import timezone


class Wilaya(models.Model):
    nomWilaya=models.CharField(max_length=25 ,primary_key=True)

    def __str__(self):
        return str(self.nomWilaya)

class Commune(models.Model):
    idCommune=models.UUIDField(primary_key=True,default=uuid.uuid4,editable=False)
    NomCommune=models.CharField(max_length=20)
    nomWilaya=models.ForeignKey(Wilaya,on_delete=models.DO_NOTHING,related_name='CommuneDewila')
    
    def __str__(self):
        return self.NomCommune


class BienImmob(models.Model):
    NumRue=models.IntegerField()
    NomRue=models.CharField(max_length=100)
    NumLogement=models.CharField(max_length=100)
    class Meta:
        unique_together = (('NumRue', 'NomRue','NumLogement'),)

class Adresse(models.Model):
    idAdresse=models.UUIDField(primary_key=True,default=uuid.uuid4,editable=False)
    nomWilaya=models.ForeignKey(Wilaya,on_delete=models.CASCADE)
    NomCommune=models.ForeignKey(Commune,on_delete=models.CASCADE)
    Immobilier=models.ForeignKey(BienImmob,on_delete=models.CASCADE,related_name='AdresseBienImob')

    def getidCommune(self):
        return self.NomCommune.NomCommune

class Annonce(models.Model):
    idAnnonce=models.UUIDField(primary_key=True,default=uuid.uuid4,editable=False)
    Description = models.TextField(max_length=500,null=True)
    Tarif = models.IntegerField()
    DatePublication=models.DateTimeField(auto_now_add=True)
    Categorie=models.CharField(max_length=20,choices=CATEGORIES)
    ThemeAnn=models.CharField(max_length=20,choices=THEMES)
    Modalite=models.CharField(max_length=20,choices=MODALITIES,default=2)
    # personne=models.ForeignKey(User,auto_created=True,on_delete=models.CASCADE)
    Localisation=models.ForeignKey(Adresse,on_delete=models.CASCADE,related_name='AnnonceLoca')
    def getadresse(self):
        return self.Description

class photo(models.Model):
    idPhoto=models.UUIDField(primary_key=True,default=uuid.uuid4,editable=False)
    path=models.FilePathField()
    annonce=models.ForeignKey(Annonce,on_delete=models.CASCADE)



from django.db import models
from django.contrib.auth.models import (
    BaseUserManager, AbstractBaseUser
)



class UserManager(BaseUserManager):
    def create_user(self, email,name,telephone, password=None):
        """
        Creates and saves a User with the given email and password.
        """
        if not email:
            raise ValueError('Users must have an email address')

        user = self.model(
            email=self.normalize_email(email),
        )
        user = self.model(telephone=telephone,name=name)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_staffuser(self, email,name,telephone, password):
        """
        Creates and saves a staff user with the given email and password.
        """
        user = self.create_user(
            
            email,
            name=name,
            telephone=telephone,
            password=password,
        )
        user.staff = True
        user.save(using=self._db)
        return user

    def create_superuser(self, email,telephone, password,name):
        """
        Creates and saves a superuser with the given email and password.
        """
        user = self.create_user(
            email,
            name=name,
            telephone=telephone,
            password=password,

        )
        user.staff = True
        user.admin = True
        user.save(using=self._db)
        return user



class User(AbstractBaseUser):
   # username = models.CharField(max_length=20,unique=True,default='user')

    email = models.EmailField(
        verbose_name='email address',
        max_length=255,
        unique=True,
    )
    name = models.CharField(max_length=20,default='unknown',unique=True)
    password = models.CharField(max_length=20)

    telephone = models.CharField(max_length=20, unique=True)
    is_active = models.BooleanField(default=True)
    staff = models.BooleanField(default=False) # a admin user; non super-user
    admin = models.BooleanField(default=False) # a superuser

    # notice the absence of a "Password field", that is built in.
    
    USERNAME_FIELD = 'name'
    REQUIRED_FIELDS = ['email','telephone','password'] # Email & Password are required by default.
    objects = UserManager()

    def get_full_name(self):
        # The user is identified by their email address
        return self.email

    def get_short_name(self):
        # The user is identified by their email address
        return self.email

    def __str__(self):
        return self.email

    def has_perm(self, perm, obj=None):
        "Does the user have a specific permission?"
        # Simplest possible answer: Yes, always
        return True

    def has_module_perms(self, app_label):
        "Does the user have permissions to view the app `app_label`?"
        # Simplest possible answer: Yes, always
        return True

    @property
    def is_staff(self):
        "Is the user a member of staff?"
        return self.staff

    @property
    def is_admin(self):
        "Is the user a admin member?"
        return self.admin

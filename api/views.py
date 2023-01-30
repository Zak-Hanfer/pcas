from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import *
from .serializers import *
from rest_framework.views import APIView
from rest_framework.exceptions import AuthenticationFailed
from .serializers import UserSerializer
from .models import User
import jwt, datetime

@api_view(['GET'])
def getWilaya(request):
    wilayas=Wilaya.objects.all()
    serialiser=WilayaSeria(wilayas,many=True)    
    return Response(serialiser.data)

@api_view(['GET'])
def getCommune(request):
    commune=Commune.objects.all()
    serialiser=CommuneSeria(commune,many=True)    
    return Response(serialiser.data)

@api_view(['GET'])
def getAnnonces(request):
    annonces=Annonce.objects.all()
    serialiser=AnnonceSeria(annonces,many=True)    
    return Response(serialiser.data)

@api_view(['GET'])
def getAnnonce(request,pk):
    annonce=Annonce.objects.get(idAnnonce=pk)
    serialiser=AnnonceSeria(annonce,many=False)    
    return Response(serialiser.data)

#-----------------------------------#


# Create your views here.
class RegisterView(APIView):
    def post(self, request):
        serializer = UserSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)



class LoginView(APIView):
    def post(self, request):
        email = request.data['email']
        password = request.data['password']

        user = User.objects.filter(email=email).first()

        if user is None:
            raise AuthenticationFailed('User not found!')

        if not user.check_password(password):
            raise AuthenticationFailed('Incorrect password!')

        payload = {
            'name': user.name,
            'exp': datetime.datetime.utcnow() + datetime.timedelta(minutes=60),
            'iat': datetime.datetime.utcnow()
        }

        token = jwt.encode(payload, 'secret', algorithm='HS256')

        response = Response()

        response.set_cookie(key='jwt', value=token, httponly=True)
        response.data = {
            'jwt': token
        }
        return response

class UserView(APIView):

    def get(self, request):
        token = request.COOKIES.get('jwt')

        if not token:
            raise AuthenticationFailed('Unauthenticated!')

        try:
            payload = jwt.decode(token, 'secret', algorithm=['HS256'])
        except jwt.ExpiredSignatureError:
            raise AuthenticationFailed('Unauthenticated!')

        user = User.objects.filter(name=payload['name']).first()
        serializer = UserSerializer(user)
        return Response(serializer.data)


class LogoutView(APIView):
    def post(self, request):
        response = Response()
        response.delete_cookie('jwt')
        response.data = {
            'message': 'success'
        }
        return response
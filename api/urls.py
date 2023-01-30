from django.urls import path
from . import views
from .views import RegisterView,LoginView,LogoutView,UserView
urlpatterns= [
    path('annonces/',views.getAnnonces,name='annonces'),
    path("register/", RegisterView.as_view(), name="register"),
    path("login/", LoginView.as_view(), name="login"),
    path("user/", UserView.as_view(), name="user"),
    path("logout/", LogoutView.as_view(), name="logout"),
    path('wilayas/',views.getWilaya,name='wilayas'),
    path('communes/',views.getCommune,name='Communes'),
    path('annonces/<str:pk>/',views.getAnnonce,name='Communes'),
]
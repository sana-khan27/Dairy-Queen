from rest_framework import generics
from rest_framework.response import Response
from .serializers import UserSignUpSerializer
from .models import User
    
class UserSignUp(generics.CreateAPIView):
    queryset=User.objects.all()
    serializer_class = UserSignUpSerializer
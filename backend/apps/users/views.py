from .models import User
from rest_framework import generics, filters
from .serializers import UserSerializer
from django_filters.rest_framework import DjangoFilterBackend


class UserList(generics.ListAPIView):
    # Get all posts, limit = 20
    queryset = User.objects.all()
    serializer_class = UserSerializer
    filter_backends = [DjangoFilterBackend, filters.SearchFilter]
    search_fields = ['name', 'email','token']
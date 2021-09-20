from .models import Cart_item
from rest_framework import generics, filters
from .serializers import Cart_itemSerializer
from django_filters.rest_framework import DjangoFilterBackend


class Cart_itemList(generics.ListAPIView):
    # Get all posts, limit = 20
    queryset = Cart_item.objects.all()
    serializer_class = Cart_itemSerializer
    filter_backends = [DjangoFilterBackend, filters.SearchFilter]
    search_fields = ['user','item','quantity']

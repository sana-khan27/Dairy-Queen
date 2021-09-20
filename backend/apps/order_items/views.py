from .models import Order_item
from rest_framework import generics, filters
from .serializers import Order_itemSerializer
from django_filters.rest_framework import DjangoFilterBackend


class Order_itemList(generics.ListAPIView):
    # Get all posts, limit = 20
    queryset = Order_item.objects.all()
    serializer_class = Order_itemSerializer
    filter_backends = [DjangoFilterBackend, filters.SearchFilter]
    search_fields = ['name', 'order','item','quantity']

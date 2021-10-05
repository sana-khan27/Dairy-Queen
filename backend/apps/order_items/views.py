from .models import OrderItem
from rest_framework import generics, filters
from .serializers import Order_itemSerializer
from django_filters.rest_framework import DjangoFilterBackend


class Order_itemList(generics.ListAPIView):
    # Get all posts, limit = 20
    queryset = OrderItem.objects.all()
    serializer_class = Order_itemSerializer
    filter_backends = [DjangoFilterBackend, filters.SearchFilter]
    search_fields = ['name', 'order','item','quantity']

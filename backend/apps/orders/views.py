from .models import Order
from rest_framework import generics, filters
from .serializers import OrderSerializer
from django_filters.rest_framework import DjangoFilterBackend


class OrderList(generics.ListAPIView):
    # Get all posts, limit = 20
    queryset = Order.objects.all()
    serializer_class = OrderSerializer
    filter_backends = [DjangoFilterBackend, filters.SearchFilter]
    search_fields = ['name', 'price','address','country','city','postal_code']

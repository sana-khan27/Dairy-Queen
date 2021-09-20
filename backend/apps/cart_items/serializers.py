from rest_framework import serializers
from .models import Cart_item
class Cart_itemSerializer(serializers.ModelSerializer):
    

    class Meta:
        model = Cart_item
        fields = '__all__'
# Create your models here.
from django.db import models
from cloudinary.models import CloudinaryField
from apps.users.models import User
from apps.order_items.models import Order_item


class Order_item(models.Model):
    class Meta(object):
        db_table = 'order_item'
    order_id= models.ForeignKey(
        Order, on_delete=models.CASCADE
    )
    item_id = models.ForeignKey(
        Item, on_delete=models.CASCADE
    )
    quantity = models.IntegerField(
        'Quantity', blank=False, null=False, db_index=True
    )
    created_at = models.DateTimeField(
        'Created Datetime', blank=True, auto_now_add=True
    )
    updated_at = models.DateTimeField(
        'Updated Datetime', blank=True, auto_now=True
    )

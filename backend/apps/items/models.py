# Create your models here.
from django.db import models
from cloudinary.models import CloudinaryField


class Item(models.Model):
    class Meta(object):
        db_table = 'item'
    status= models.CharField(
        'Status', blank=False, null=False, max_length=15, db_index=True, default='Anonymous'  
    )
    name = models.CharField(
        'Name', blank=False, null=False, max_length=120, db_index=True, default='Anonymous'
    )
    price = models.IntegerField(
        'Price', blank=False, null=False, db_index=True
    )
    image = CloudinaryField(
        'image', blank=True, null=True
    )
    created_at = models.DateTimeField(
        'Created Datetime', blank=True, auto_now_add=True
    )
    updated_at = models.DateTimeField(
        'Updated Datetime', blank=True, auto_now=True
    )

# Create your models here.
from django.db import models
from cloudinary.models import CloudinaryField
from apps.users.models import User

class Order(models.Model):
    class Meta(object):
        db_table = 'order'
    user_id = models.ForeignKey(
        User, on_delete=models.CASCADE
    )
    total_price = models.FloatField(
        'Total_price', blank=False, null=False,db_index=True, default='Anonymous'
    )
    full_name = models.CharField(
        'Full_name', blank=False,max_length=25, null=False, db_index=True
    )
    address_line1 = models.CharField(
        'Address_line1', blank=False,max_length=250, null=False, db_index=True
    )
    address_line2 = models.CharField(
        'Address_line2', blank=False,max_length=250, null=False, db_index=True
    ) 
    city = models.CharField(
        'City', blank=False,max_length=25, null=False, db_index=True
    )
    state = models.CharField(
        'State', blank=False,max_length=25, null=False, db_index=True
    )
    postal_code = models.IntegerField(
        'Postal_code', blank=False, null=False, db_index=True
    )
    country = models.CharField(
        'Country', blank=False,max_length=25, null=False, db_index=True
    )
    telephone = models.IntegerField(
        'Telephone', blank=False, null=False, db_index=True
    )
    created_at = models.DateTimeField(
        'Created Datetime', blank=True, auto_now_add=True
    )
    updated_at = models.DateTimeField(
        'Updated Datetime', blank=True, auto_now=True
    )

# Create your models here.
from django.db import models
from cloudinary.models import CloudinaryField

class User(models.Model):
    class Meta(object):
        db_table = 'user'
    username= models.CharField(
        'Username', blank=False, null=False, max_length=50, db_index=True, default='Anonymous'  
    )
    password= models.CharField(
        'Password', blank=False, null=False, max_length=500, db_index=True, default='Anonymous'
    )
    email= models.EmailField(
        'Email', blank=False, max_length=254, null=False, db_index=True
    )
    token= models.CharField(
        'Token', blank=False, max_length=500, null=False, db_index=True
    )
    token_expires_at= models.DateField(
        'Token_expires_at', blank=False, null=False, db_index=True
    )
    created_at = models.DateTimeField(
        'Created Datetime', blank=True, auto_now_add=True
    )
    updated_at = models.DateTimeField(
        'Updated Datetime', blank=True, auto_now=True
    )


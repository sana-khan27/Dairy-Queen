from .models import User
from rest_framework import serializers
from django.contrib.auth.hashers import make_password, check_password
from secrets import token_hex
import datetime

class UserSerializer(serializers.ModelSerializer):
  password = serializers.CharField(write_only=True)
  
  class Meta:
      model = User
      fields = ('user_name','password','email','token','token_expires_at')
      
class UserSignUpSerializer(serializers.ModelSerializer):
      password = serializers.CharField(write_only=True)  
      token = serializers.CharField(read_only=True)  
      token_expires_at = serializers.DateTimeField(read_only=True)
      class Meta:
        model = User
        fields = ('user_name','password','email','token','token_expires_at')
        
        #Override the create method
        def create(self,validated_data): 
            #Encrypt the password
            validated_data['password'] = make_password(validated_data['password'])
            
            #Create a token
            validated_data['token'] = token_hex(30)
            validated_data['token_expires_at']=datetime.datetime.now() + datetime.timedelta(days=7)
            
            return super().create(validated_data)
from django.urls import path
from . import views

urlpatterns = [
    path('', views.Cart_itemList.as_view(), name='Cart_item_list'),
]
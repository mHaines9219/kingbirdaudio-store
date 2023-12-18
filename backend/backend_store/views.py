from django.shortcuts import render
from rest_framework import viewsets
from .serializers import ProductSerializer
from .models import Product
# Create your views here.



class ProductView(viewsets.ModelViewSet):
    serializer_class = ProductSerializer
    #what is to be serialized? below
    queryset = Product.objects.all()
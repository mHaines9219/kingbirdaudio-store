from django.shortcuts import render
from rest_framework import viewsets
from .serializers import TodoSerializer,ProductSerializer
from .models import Todo, Product
# Create your views here.

class TodoView(viewsets.ModelViewSet):
    #special keywords, model viewset is expecting serializer_class
    serializer_class = TodoSerializer
    #what is to be serialized? below
    queryset = Todo.objects.all()

class ProductView(viewsets.ModelViewSet):
    serializer_class = ProductSerializer
    #what is to be serialized? below
    queryset = Product.objects.all()
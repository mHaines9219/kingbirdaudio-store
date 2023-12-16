from rest_framework import serializers
from .models import Todo, Product

class TodoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Todo
        fields=('id','title','description','completed')
        
class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields=('id','title','daw','description')

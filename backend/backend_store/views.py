from django.shortcuts import render
from rest_framework import viewsets
from .serializers import ProductSerializer
from .models import Product
from rest_framework.views import APIView
from rest_framework.response import Response
from django.shortcuts import get_list_or_404

# # Create your views here.


class ProductView(viewsets.ModelViewSet):
    serializer_class = ProductSerializer
    # what is to be serialized? below
    queryset = Product.objects.all()


class ProductByDawListView(APIView):
    def get(self, request, daw_name):
        products = get_list_or_404(Product, daw=daw_name)
        serializer = ProductSerializer(products, many=True)
        return Response(serializer.data)


# class FeaturedProductsView(APIView):
#     def get(self, request):
#         # Fetch only products where 'isFeatured' is True
#         featured_products = Product.objects.filter(isFeatured=True)
#         serializer = ProductSerializer(featured_products, many=True)
#         return Response(serializer.data)


class FeaturedProductsView(APIView):
    def get(self, request):
        products = Product.objects.all()  # Temporarily return all products
        serializer = ProductSerializer(products, many=True)
        return Response(serializer.data)

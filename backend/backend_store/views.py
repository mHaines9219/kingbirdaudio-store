from django.shortcuts import render
from rest_framework import viewsets, status
from .serializers import ProductSerializer
from .models import Product, Cart, CartProduct
from rest_framework.views import APIView
from rest_framework.response import Response
from django.shortcuts import get_list_or_404, get_object_or_404
from rest_framework.decorators import api_view

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

@api_view(["POST"])
def create_order(request):

    cart_id = request.data.get('cart_id')
    print(cart_id)
    cart = get_object_or_404(Cart, id=cart_id)
    order = Order.objects.create(email=request.data.get('email'), cart=cart)
    for cart_product in cart.products.all():
        OrderProduct.objects.create(order=order, product=cart_product.product, quantity=cart_product.quantity)
    return Response(status=status.HTTP_201_CREATED)


@api_view(["POST"])
def add_to_cart(request, product_id):
    product = get_object_or_404(Product, id=product_id)
    
    if request.user.is_authenticated:
        user = request.user
        cart, created = Cart.objects.get_or_create(user=user)
    else:
        # Handle unauthenticated users here
        cart_id = request.session.get('cart_id')
        if cart_id:
            cart, created = Cart.objects.get_or_create(id=cart_id)
        else:
            cart = Cart.objects.create()
            request.session['cart_id'] = cart.id
            request.session.save()  # Explicitly save the session

    cart_product, created = CartProduct.objects.get_or_create(
        cart=cart, product=product, defaults={'quantity': 1}
    )
    if not created:
        cart_product.quantity += 1
        cart_product.save()

    return Response(status=status.HTTP_201_CREATED)

@api_view(["GET"])
def get_cart_id(request):
    cart_id = request.session.get('cart_id')
    return Response({'cart_id': cart_id})
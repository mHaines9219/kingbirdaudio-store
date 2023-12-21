# backend/backend_store/urls.py
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ProductByDawListView, FeaturedProductsView, ProductView, add_to_cart,create_order,get_cart_id

router = DefaultRouter()
router.register(r"product", ProductView)

urlpatterns = [
    path("", include(router.urls)),
    path("category/<str:daw_name>/", ProductByDawListView.as_view()),
    path("products/featured/", FeaturedProductsView.as_view()),
    path('add-to-cart/<int:product_id>/', add_to_cart, name='add_to_cart'),
    path('create-order/', create_order, name='create_order'),
    path('get-cart-id/', get_cart_id, name='get_cart_id'),
]
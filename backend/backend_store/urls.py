# backend/backend_store/urls.py
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ProductByDawListView, FeaturedProductsView, ProductView

router = DefaultRouter()
router.register(r"product", ProductView)

urlpatterns = [
    path("", include(router.urls)),
    path("category/<str:daw_name>/", ProductByDawListView.as_view()),
    path("products/featured/", FeaturedProductsView.as_view()),
]

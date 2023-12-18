# backend/backend_store/urls.py (or similar)
from django.urls import path
from .views import ProductByDawListView, FeaturedProductsView


urlpatterns = [
    # ... other patterns ...
    path("category/<str:daw_name>/", ProductByDawListView.as_view()),
    path("products/featured/", FeaturedProductsView.as_view()),
]

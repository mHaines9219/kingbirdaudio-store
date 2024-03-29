from django.db import models
from django.contrib.auth.models import User


# Create your models here.


class Product(models.Model):
    title = models.CharField(max_length=150)
    daw = models.CharField(max_length=20)
    description = models.TextField()
    price = models.IntegerField()
    image_url = models.URLField(max_length=1024, default="")
    isFeatured = models.BooleanField(default=False)
    downloadUrl = models.URLField(default="")


    def __str__(self):
        return self.title


class Download(models.Model):
    name = models.CharField(max_length=255)
    url = models.URLField()
    # other fields


class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    available_downloads = models.ManyToManyField(Download)

    def __str__(self):
        return f"{self.user.username}'s profile"


class Cart(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=True, blank=True)
    products = models.ManyToManyField(Product, through="CartProduct")
    
class CartProduct(models.Model):
    cart = models.ForeignKey(Cart, on_delete=models.CASCADE)
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    quantity = models.IntegerField()
class Order(models.Model):
    email = models.EmailField(max_length=254)
    cart = models.ForeignKey(Cart, on_delete=models.SET_NULL, null=True, blank=True)

    def __str__(self):
        return f"Order {self.id}"

class OrderProduct(models.Model):
    order = models.ForeignKey(Order, on_delete=models.CASCADE)
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    quantity = models.IntegerField()

    def __str__(self):
        return f"Order {self.order.id} - Product {self.product.title}"
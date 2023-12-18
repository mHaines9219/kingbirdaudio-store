from django.db import models
from django.contrib.auth.models import User


# Create your models here.

    
class Product(models.Model):
    title = models.CharField(max_length=150)
    daw = models.CharField(max_length=20)
    description = models.TextField()
    price = models.IntegerField()


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
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    products = models.ManyToManyField(Product, through='CartProduct')

class CartProduct(models.Model):
    cart = models.ForeignKey(Cart, on_delete=models.CASCADE)
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    quantity = models.IntegerField()
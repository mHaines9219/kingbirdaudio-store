# Generated by Django 5.0 on 2023-12-18 02:50

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('backend_store', '0003_cart_cartproduct_download_userprofile_delete_todo_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='product',
            name='image_url',
            field=models.URLField(default='', max_length=1024),
        ),
    ]

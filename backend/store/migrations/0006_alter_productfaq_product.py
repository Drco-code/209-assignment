# Generated by Django 4.2.7 on 2024-06-09 15:38

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ("store", "0005_alter_productfaq_product"),
    ]

    operations = [
        migrations.AlterField(
            model_name="productfaq",
            name="product",
            field=models.ForeignKey(
                on_delete=django.db.models.deletion.CASCADE, to="store.product"
            ),
        ),
    ]

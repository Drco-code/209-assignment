# Generated by Django 4.2.7 on 2024-09-10 21:19

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("store", "0010_cartorderitem_coupon"),
    ]

    operations = [
        migrations.AddField(
            model_name="cartorder",
            name="stripe_session_id",
            field=models.CharField(blank=True, max_length=1000, null=True),
        ),
    ]

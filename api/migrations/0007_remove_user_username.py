# Generated by Django 4.1.4 on 2023-01-28 18:20

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0006_user_username'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='user',
            name='username',
        ),
    ]

# Generated by Django 5.0.1 on 2024-05-21 21:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0003_pessoa_datadodesativ0'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='pessoa',
            name='dataDoDesativ0',
        ),
        migrations.AddField(
            model_name='pessoa',
            name='dataDoDesativo',
            field=models.CharField(blank=True, max_length=15, null=True),
        ),
    ]
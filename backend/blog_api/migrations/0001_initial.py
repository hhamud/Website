# Generated by Django 3.1.4 on 2020-12-12 16:36

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Post',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=50)),
                ('excerpt', models.CharField(max_length=200)),
                ('thumbnail', models.ImageField(upload_to='images/<django.db.models.fields.CharField>')),
                ('date_created', models.DateTimeField(auto_now_add=True)),
                ('date_updated', models.DateTimeField(auto_now=True)),
                ('catagory', models.CharField(choices=[('world', 'World'), ('technology', 'Technology'), ('culture', 'Culture')], default='world', max_length=50)),
                ('content', models.TextField()),
                ('slug', models.SlugField(max_length=250)),
                ('featured', models.BooleanField(default=False)),
            ],
        ),
    ]

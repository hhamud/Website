from django.db import models
from datetime import datetime
from django.template.defaultfilters import slugify
import os

class Catagory(models.TextChoices):
    WORLD = 'world'
    TECHNOLOGY = 'technology'
    CULTURE = 'culture'



class Post(models.Model):
    title = models.CharField(max_length=50)
    excerpt = models.CharField(max_length=200)
    thumbnail = models.ImageField(upload_to='images/')
    date_created = models.DateTimeField(auto_now_add=datetime.now)
    date_updated = models.DateTimeField(auto_now=datetime.now)
    catagory = models.CharField(max_length=50, choices=Catagory.choices, default=Catagory.WORLD)
    content = models.TextField()
    slug = models.SlugField()
    featured = models.BooleanField(default=False)

   
    



    def save(self, *args, **kwargs):
        original_slug = slugify(self.title)
        queryset = Post.objects.all().filter(slug__iexact=original_slug).count()
        count = 1
        slug = original_slug
        while(queryset):
            slug = original_slug + '-' + str(count)
            count += 1
            queryset = Post.objects.all().filter(slug__iexact=slug).count()

        self.slug = slug

        if self.featured:
            try:
                temp = Post.objects.get(featured=True)
                if self != temp:
                    temp.featured = False
                    temp.save()
            except Post.DoesNotExist:
                pass
        
        super(Post, self).save(*args, **kwargs)
        



    def __str__(self):
        return self.title

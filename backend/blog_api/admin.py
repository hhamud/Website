from django.contrib import admin
from django_summernote.admin import SummernoteModelAdmin
from .models import Post


class PostAdmin(SummernoteModelAdmin):
    exclude = ['slug', ]  
    summernote_fields = ('content', )
    list_display = ('id', 'title', 'slug' ,'catagory', 'date_created','date_updated', )
    list_display_links = ('id', 'title')

admin.site.register(Post, PostAdmin)



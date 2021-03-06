from django.contrib import admin
from django.urls import path, include, re_path
from django.conf import settings
from django.conf.urls.static import static
from django.views.generic import TemplateView


urlpatterns = [
    path('api-auth', include('rest_framework.urls')),
    path('summernote', include('django_summernote.urls')),
    path('api/blog/', include('blog_api.urls')),
    path('admin', admin.site.urls),
    re_path('', TemplateView.as_view(template_name="index.html"))
] 



if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

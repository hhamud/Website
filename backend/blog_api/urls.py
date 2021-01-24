from django.urls import path
from blog_api.views import PostListView, PostDetailView, PostFeaturedView, PostCatagoriesView

urlpatterns = [
    path('', PostListView.as_view()),
    path('featured/', PostFeaturedView.as_view()),
    path('category/', PostCatagoriesView.as_view()),
    path('<slug>/', PostDetailView.as_view()),
]
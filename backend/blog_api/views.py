from rest_framework.response import Response
from rest_framework import permissions
from rest_framework.views import APIView
from rest_framework.generics import ListAPIView, RetrieveAPIView
from blog_api.models import Post
from blog_api.serializer import PostSerializer

class PostListView(ListAPIView):
    queryset = Post.objects.order_by('-date_created')
    serializer_class = PostSerializer
    lookup_field = 'slug'
    permission_classes = (permissions.AllowAny, )

class PostDetailView(RetrieveAPIView):
    queryset = Post.objects.order_by('-date_created')
    serializer_class = PostSerializer
    lookup_field = 'slug'
    permission_classes = (permissions.AllowAny, )

class PostFeaturedView(ListAPIView):
    queryset = Post.objects.all().filter(featured=True)
    serializer_class = PostSerializer
    lookup_field = 'slug'
    permission_classes = (permissions.AllowAny, )

class PostCatagoriesView(APIView):
    serializer_class = PostSerializer
    permission_classes = (permissions.AllowAny, )

    def post(self, request, format=None):
        data = self.request.data
        catagory = data['catagory']
        queryset = Post.objects.order_by('-date_created').filter(catagories__iexact=catagory)

        serializer = PostSerializer(queryset, many=True)

        return Response(serializer.data)



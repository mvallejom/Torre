from django.shortcuts import render
from rest_framework import generics

from .models import User
from .serializers import UserSerializer
from .services import get_username

# trying to connect to endpoint
def hello_user(requests,slug):
    context = {
        'name': get_username(slug)
    }
    print(get_username(slug))
    return render(requests, 'hello_user.html', context)




class ListUser(generics.ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer


class DetailUser(generics.RetrieveUpdateDestroyAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
# Create your views here.

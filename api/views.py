from django.shortcuts import render
from django.http import HttpResponse
from .serializers import RoomSerializer
from rest_framework import generics
from .models import Room

# Create your views here.
# def main(request):
#      return HttpResponse("Hello, world. You're at the app index.")

# API view for django.contrib.auth.models.Room
class RoomView(generics.CreateAPIView):
     queryset = Room.objects.all()
     serializer_class = RoomSerializer

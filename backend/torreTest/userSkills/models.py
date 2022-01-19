from array import ArrayType
from django.db import models

# Create your models here.
class Skills(models.Model):
    name = models.CharField(max_length=200)
    proficiency = models.CharField(max_length=200)

class User(models.Model):
    name = models.CharField(max_length=200)
    headline = models.CharField(max_length=200 ,default = "")
    pictureThumbnail = models.CharField(max_length=2000,default = "")
    summary = models.CharField(max_length=500,default = "")
    skills = models.ManyToManyField(Skills)



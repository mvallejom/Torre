from rest_framework import serializers
from .models import User


class TodoSerializer(serializers.ModelSerializer):
    class Meta:
        fields = (
            'id',
            'name',
            'description',
        )
        model = User
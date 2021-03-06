# Generated by Django 4.0.1 on 2022-01-19 06:31

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('userSkills', '0002_skills_remove_user_description'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='headline',
            field=models.CharField(default='', max_length=200),
        ),
        migrations.AddField(
            model_name='user',
            name='pictureThumbnail',
            field=models.CharField(default='', max_length=2000),
        ),
        migrations.AddField(
            model_name='user',
            name='skills',
            field=models.ManyToManyField(to='userSkills.Skills'),
        ),
        migrations.AddField(
            model_name='user',
            name='summary',
            field=models.CharField(default='', max_length=500),
        ),
    ]

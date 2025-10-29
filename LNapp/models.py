from django.db import models

# Create your models here.

class Book(models.Model):
    title = models.CharField(max_length=255)
    author = models.CharField(max_length=255)
    subtitle = models.TextField(blank=True, null=True)
    image = models.ImageField(upload_to='book_images/')
    preorder = models.BooleanField(default=False)
    description = models.TextField()
    slug = models.SlugField(unique=True, max_length=255)

    def __str__(self):
        return self.title


class CaseStudy(models.Model):
    title = models.CharField(max_length=255)
    short_description = models.TextField(max_length=300)
    full_description = models.TextField()
    image = models.ImageField(upload_to='case_studies/')
    slug = models.SlugField(unique=True, max_length=255)
    date = models.DateField(auto_now_add=True)
    link = models.CharField(max_length=500, blank=True, null=True, help_text="Optional external link" )

    def __str__(self):
        return self.title
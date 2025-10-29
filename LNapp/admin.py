from django.contrib import admin
from .models import Book, CaseStudy

# Register your models here.
@admin.register(Book)
class BookAdmin(admin.ModelAdmin):
    list_display = ('title', 'author', 'preorder')
    prepopulated_fields = {'slug': ('title',)}


@admin.register(CaseStudy)
class CaseStudyAdmin(admin.ModelAdmin):
    list_display = ('title', 'date')
    prepopulated_fields = {'slug': ('title',)}
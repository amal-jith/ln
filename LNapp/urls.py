from .import views
from django.urls import path


app_name = "LNapp"


urlpatterns = [
    path('', views.home, name="home"),

    path('contact/', views.contact_submit, name='contact_form_submit'),
]
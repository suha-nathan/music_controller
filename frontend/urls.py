
from django.urls import path, re_path
from .views import index

urlpatterns = [
    path('',index),
    path('join',index),
    path('create',index),
    # re_path(r".*", index)

]
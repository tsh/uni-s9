
from django.conf.urls import url
from django.contrib import admin
from calc import views as calc_view

urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^$', calc_view.index, name='index'),

]

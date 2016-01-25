
from django.conf.urls import url
from django.contrib import admin
from calc import views as calc_view

urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^$', calc_view.index, name='index'),
    # auth
    url(r"^login/$", "django.contrib.auth.views.login", {"template_name": "registration/login.html"}, name="login"),
    url(r"^logout/$", "django.contrib.auth.views.logout", {"next_page": "/"}, name="logout"),
    url(r"^register/$", calc_view.register, name="registration"),
]

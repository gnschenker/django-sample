from django.conf import settings
from django.conf.urls import include, url
from django.contrib import admin
from django.conf.urls.static import static

urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^polls/', include('polls.urls')),
    url(r'^posts/', include('posts.urls')),
] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
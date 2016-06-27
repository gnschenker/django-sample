# from django.views import generic
# from .models import Post
#
# class IndexView(generic.DetailView):
#     model = Post
#     template_name = 'posts/index.html'
#

from mongoengine import connect, Document, StringField
from django.http import HttpResponse


def index(request):
    print('trying to save into mongo db...DB=test, Collection=Book')
    connect(host='mongodb://mongo:27017/test')
    book = Book(name='Hello World')
    book.save()
    return HttpResponse("Hello, world. You're at the posts index.")

class Book(Document):
    name = StringField()
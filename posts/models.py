from mongoengine import DynamicDocument, StringField, DateTimeField
import datetime

class Post(DynamicDocument):
  title = StringField(max_length=200, required=True)
  date_modified = DateTimeField(default=datetime.datetime.now)
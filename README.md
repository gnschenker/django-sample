# django-sample

## Run the application
```
docker-compose up
```

...and clean up...
```
docker-compose down
```

## DB migration and super user
To migrate the apllication DB exec into the application container
```
docker exec -it mysite /bin/bash
```

then run the command
```
python manage.py migrate
```

to create a super user use the following command
```
echo "from django.contrib.auth.models import User; User.objects.create_superuser('wombat', 'admin@alienvault.com', '1wombat2')" | python manage.py shell
```

## Run the tests
```
docker-compose -f docker-compose.test.yml up
```

...and clean up...
```
docker-compose down
```

## Admin MySQL
To drop an existing test database first connect to MySQL

`docker exec -it mysql bash`

and then run

`mysqladmin --password=[root-password] drop [database-name]`

## Run the app in the correct network (debugging)
```
docker run -it --rm --entrypoint /bin/bash --link mysql --net mysite_default mysite_app
```


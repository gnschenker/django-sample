# django-sample

## Run the application
docker-compose up

...and clean up...
```
docker-compose down
```

## Run the tests
docker-compose -f docker-compose.test.yml up

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


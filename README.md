# django-sample

## Run the application locally
```
docker-compose -f docker/docker-compose.debug.yml up
```

This will start the application in a container called **app** and the application will be linked to a container running Mongo DB called **mongo** and a container running MySQL called **mysql**.

Furthermore for development purposes 2 additional containers are started that 

* monitor the frontend js, css and html files for changes and run WebPack if so
* monitor the JavaScript tests for changes and re-run Karma if so

To allow for a nice **edit and continue** experience relevant directories are mapped into the respective containers (app, webpack, ui-unittests). This way changes in the file system are forwarded to the container and the appropriate action can be taken.

Once we are done for the day with developing we can simple run the following clean up command

```
docker-compose -f docker/docker-compose.debug.yml down
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
echo "from django.contrib.auth.models import User; User.objects.create_superuser('wombat', 'wombat@company.com', '1wombat2')" | python manage.py shell
```

This will create a user **wombat** with email **wombat@company.com** and password **1wombat2***

## Run the tests
```
docker-compose -f docker/docker-compose.test.yml up
```

...and clean up...
```
docker-compose -f docker/docker-compose.test.yml down
```

# Appendix
## Trouble shooting
If for some reason the application does not work as expected then 1st try to clean up your Docker environment

Remove all containers (brute force)
```
docker kill $(docker ps -aq)
docker rm $(docker ps -aq)
```

Remove (untagged) Docker images
``` 
docker rmi $(docker images | grep "<none>" | awk "{print $3}")
```

## Admin MySQL

If for some reason we want to do some administrative tasks in MySQL, e.g. to drop an existing test database we can do like this

first connect to MySQL

`docker exec -it mysql bash`

and then run

`mysqladmin --password=[root-password] drop [database-name]`

## Run the app in the correct network (debugging)
```
docker run -it --rm --entrypoint /bin/bash --link mysql --net mysite_default mysite_app
```


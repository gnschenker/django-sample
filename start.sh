#!/usr/bin/env bash
sleep 10s    #wait for MySQL
#python ./manage.py migrate
# create the super-user
#echo "from django.contrib.auth.models import User; User.objects.create_superuser('wombat', 'wombat@alienvault.com', '1wombat2')" | python ./manage.py shell

python ./manage.py runserver '0.0.0.0:8000'

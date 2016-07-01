#!/usr/bin/env bash
sleep 5s    #wait for MySQL
python ./manage.py runserver '0.0.0.0:8000'

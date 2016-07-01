FROM celery:3
RUN mkdir -p /usr/src/app
COPY . /usr/src/app
CMD celery -A tasks worker --loglevel=info
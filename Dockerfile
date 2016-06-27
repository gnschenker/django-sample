FROM python:2.7
RUN apt-get update \
        && apt-get install -y build-essential python-dev libmysqlclient-dev \
        && apt-get purge -y
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY requirements.txt /usr/src/app/
RUN pip install --no-cache-dir -r requirements.txt
COPY . /usr/src/app
EXPOSE 8000
RUN chmod +x ./start.sh
ENTRYPOINT ./start.sh

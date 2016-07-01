FROM python:2.7
RUN apt-get update \
        && apt-get install -y build-essential python-dev libmysqlclient-dev \
        && apt-get purge -y
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY requirements.txt /usr/src/app/
RUN pip install --no-cache-dir -r requirements.txt

#COPY front/package.json /usr/src/app/front/
#WORKDIR /usr/src/app/front
#RUN npm install
#WORKDIR /usr/src/app

COPY . /usr/src/app
EXPOSE 8000
RUN chmod +x ./start.sh
RUN chmod +x ./test.sh
ENTRYPOINT ./start.sh

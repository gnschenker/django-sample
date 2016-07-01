from celery import Celery

app = Celery('tasks', broker='ampq://guest@rabbitMQ//')

@app.task
def add(x, y):
    print("adding %d and %d" & (x,y))
    return x + y
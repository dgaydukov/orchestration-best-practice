# Orchestration best practices

## Content
* [Description](#description)
* [Built images](#built-images)
* [Types of orchestration](#types-of-orchestration)
* [Authors](#authors)

### Description

In this project, I'm going to show container orchestratiton with docker compose for local development, docker swarm for simple projects and kubernetes for production.
Here we have a simple app to manage notes. So you have `title`, `desc`, `date`. You can add, modify and delete notes.
This project assumes, that you have already `docker` installed.

### Built images

`docker-compose` can work without images, you just pass directory and it builds image from source code. For swarm and kubernetes we need to set images from docker registry. We can push our images to [public repository](https://hub.docker.com/).
Build and push repos: 
```shell
# login to hub.docker.com
docker login --username=dgaydukov

cd backend/
# build backend image
docker build . -t dgaydukov/backend
# upload backend image to hub
docker push dgaydukov/backend

cd frontned/
# build frontend image
docker build . -t dgaydukov/frontend
# upload frontend image to hub
docker push dgaydukov/frontend
```

So we have 2 images `dgaydukov/backend` and `dgaydukov/frontend` that we are going to use in our swarm and kubernetes deployment.

### Types of orchestration

In this project we will take a look at 3 most common types of container orchestrations:

* Docker compose
* Docker swarm
* Kubernetes

###### Docker compose

This is the most simple way of orchestration. You just put all your images in one file and run them. It's main use case is development or in testing. In these 2 cases you don't need high availability, replicase, ingress and so on. 
You need a simple instrument to run all container and work with them, or test them. So my verdict is to use `docker-compose` only if you are developer, or for testing purpose. For example when you arun `ci/cd pipeline` you can create an instance of your app with `docker-compose` and run tests against it.

```shell
cd docker-compose
# run docker compose
docker-compose up -d --build
```

###### Docker swarm

Swarm is the orchestration tool for docker. It's very simple to use, especially if you are familiar with `docker` and `docker-compose`. You can run swarm almost the same way you run `docker-compose`, and even their config files look similar.
But if you take a closer look, you will notice that `swarm` add new functionality to configs. First of all you can't build swarm app. You need to have images in docker hub. Second you can set-up replicas (for high availability).

```shell
cd docker-swarm
# init swarm mode
docker swarm init

# dedploy services
docker stack up -c docker-compose.swarm.yml noteapp

# view created services
docker service ls
```

###### Kubernetes

This part assumed, that you have installed `minikube` and `kubectl`.

```shell
cd kubernetes

# start local version of kubernetes
minikube start

kubectl apply -f config.yml
```

### Authors

* **Gaydukov Dmitiry** - *Take a look* - [How to become a Senior Javascript Developer](https://github.com/dgaydukov/how-to-become-a-senior-js-developer)

### Plan

1. Run simple nginx image with minikube and ingress
https://medium.com/@Oskarr3/setting-up-ingress-on-minikube-6ae825e98f82
https://stackoverflow.com/questions/53253793/kubernetes-ingress-with-minikube
https://stackoverflow.com/questions/51243717/no-ingress-address-on-minikube-kubernetes-cluster-with-nginx-ingress-controller
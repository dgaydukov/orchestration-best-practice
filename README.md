# Orchestration best practices

## Content
* [Description](#description)
* [Types of orchestration](#types-of-orchestration)
* [Authors](#authors)

### Description

In this project, I'm going to show container orchestratiton with docker compose for local development, docker swarm for simple projects and kubernetes for production.
Here we have a simple app to manage notes. So you have `title`, `desc`, `date`. You can add, modify and delete notes.
This project assumes, that you have already `docker` installed.

### Types of orchestration

In this project we will take a look at 3 most common types of container orchestrations:

* Docker compose
* Docker swarm
* Kubernetes

###### Docker compose

This is the most simple way of orchestration. You just put all your images in one file and run them.

```shell
cd docker-compose
# run docker compose
docker-compose up -d --build
```

###### Docker swarm

At first we have to convert your docker insto swarm mode.
```shell
cd docker-swarm
# init swarm mode
docker swarm init
```

###### Kubernetes
```shell
# run kubernetes with minikube
minikube start
kubectl apply ./kubernetes/config.yaml
```

### Authors

* **Gaydukov Dmitiry** - *Take a look* - [How to become a Senior Javascript Developer](https://github.com/dgaydukov/how-to-become-a-senior-js-developer)

### Plan

1. Create swarm deployment
2. Run simple nginx image with minikube and ingress
https://medium.com/@Oskarr3/setting-up-ingress-on-minikube-6ae825e98f82
https://stackoverflow.com/questions/53253793/kubernetes-ingress-with-minikube
https://stackoverflow.com/questions/51243717/no-ingress-address-on-minikube-kubernetes-cluster-with-nginx-ingress-controller
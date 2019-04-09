# Orchestration best practices

## Content
* [Description](#description)
* [Installation](#installation)
* [Authors](#authors)

### Description

In this project, I'm going to show container orchestratiton with docker compose for local development, docker swarm for simple projects and kubernetes for production.
Here we have a simple app to manage notes. So you have `title`, `desc`, `date`. You can add, modify and delete notes.


### Installation

Since the project includes 3 tools, you should run all of them
```shell
# run docker compose
docker-compose up -d

# run docker swarm
docker swarm init

# run kubernetes with minikube
minikube start
kubectl apply kuber.yaml
```


### Authors

* **Gaydukov Dmitiry** - *Take a look* - [How to become a Senior Javascript Developer](https://github.com/dgaydukov/how-to-become-a-senior-js-developer)



### Plan

1. Create image with backend (simple to-do)
2. Create image with frontend (simple to-do)
3. Create docker-compose file with deployment
4. Create swarm deployment
5. Run simple nginx image with minikube and ingress
https://medium.com/@Oskarr3/setting-up-ingress-on-minikube-6ae825e98f82
https://stackoverflow.com/questions/53253793/kubernetes-ingress-with-minikube
https://stackoverflow.com/questions/51243717/no-ingress-address-on-minikube-kubernetes-cluster-with-nginx-ingress-controller
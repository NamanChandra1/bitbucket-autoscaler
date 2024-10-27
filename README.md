# bitbucket-autoscaler
Setting Up Ondemand Bitbucket Runners using KEDA


# Prerequisites
Kubernetes Cluster: A functional Kubernetes cluster (EKS, GKE, AKS, or local clusters like Minikube).
KEDA Installed: Follow KEDA’s installation guide to install KEDA in your cluster.
Bitbucket Account: Access to your organization in Bitbucket and permission to create runners.
Bitbucket API Token: Required to interact with Bitbucket's API to monitor pending pipelines.
Container Registry: DockerHub or any private registry to store your custom runner image.

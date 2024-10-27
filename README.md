# bitbucket-autoscaler
Setting Up Ondemand Bitbucket Runners using KEDA


# Prerequisites
- Kubernetes Cluster: A functional Kubernetes cluster (EKS, GKE, AKS, or local clusters like Minikube).
- KEDA Installed: Follow KEDA’s installation guide to install KEDA in your cluster.
- Bitbucket Account: Access to your organization in Bitbucket and permission to create runners.
- Bitbucket API Token: Required to interact with Bitbucket's API to monitor pending pipelines.

# Architecture Overview
- KEDA monitors the Bitbucket pipeline queue (via API metrics) and scales Bitbucket runners.
- Custom Application queries the Bitbucket API and exposes metrics like pending jobs.
- ScaledObject in KEDA triggers scaling actions based on the pending jobs metric.
- Bitbucket Runner Pods spin up on demand to execute jobs and terminate after completion.



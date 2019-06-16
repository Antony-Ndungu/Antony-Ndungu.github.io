# Kubernetes

## Monolith applications - legacy technologies
1. Components are tightly coupled and almost impossible to separate, and a nightmare
1. Deployed on super expensive hardware.
    - Being a large, single piece of software

## Learning Objectives
- Explain what a monolith is.
- Discuss the monolith's challenges in the cloud.
    - Deployed on super expensive hardware
    - Scaling of individual features is almost impossible.
    - Scaling the entire applition means to manually deploy a new instance of the monolith on another server, typically behind a load balancing appliance. A pricey solution. 
    - During upgrades, patches or migration, downtimes occur and maintenance windows have to be planned as disruptions in service are expected to impact clients.
    - Minimize downtimes to customers by setting up monolith applications in highly available active/passive configuration, it may be challenging for systems engineers to keep all systems at the same patch level.
- Discuss microservices advantages in the cloud.
- Describe the transformation path from a monolith to microservices

## The Modern Microservices
- Small independent processes which communicate with each other through APIs over a network
- loosely coupled components, each performing a specific business function
- can be deployed individually on separate servers provisioned with fewer resources - only what is required by each service and the host system itself.
- Developed and written in a modern programming language, selected to be the best suitable for the type of service and its business function.
- Distributed nature of microservices adds complexity to the architecture
- One of the greatest benefits of microservices is scalability. Overall application is modular, each microservice can be scaled individually, either manually or authomated through demand-based autoscaling.
- Seamless upgrades and patching processes. There is virtually no downtime and no service disruption to clients because updates are rolled out seamlessly - one service at a time, rather than having to re-compile, re-build and re-start an entire monolithic application.
- Businesses are able to develop and roll-out new features and updates a lot faster, in an agile approach, having seperate teams focusing on seperate features, thus being more productive and cost effective.



## Application Containers
- Provide encapsulated lightweight runtime environment for appliation modules. To avoid dirrent libraries and runtime environment conflicts with one another causing errors and failures. Not deployment of single module per servers in order to seperate their dependencies.(not economical way of resource management.);
- Promise a consistent software environment for developers, testers, all the way from Development to Production.
- Multiple applications deployed on the very same server, each running in their own execution environment isolated from one another, thus avoid conflict, errors and failures.
- Higher server utilization
- Individual module scalability
- Flexibility
- easy integration with automation tools.
- Confine the application code, it's runtime, and all of its dependencies in a pre-defined format.


## Container Orchestrators
Group systems together to form clusters where containers' deployment and management is automated at scale while meeting the requirements mentioned below:
- Fault tolerance
- On demand scalability
- Optimal resource usage
- Auto discovery to automatically discover and communicate with each other
- Accessibility from the outside world
- Seamless updates/ rollbacks without any downtime

## Most Container Orchestrators can
1. Group hosts together while creating a cluster
1. Schedule containers to run on hosts in the cluster based on resouces availability
1. Enable containers in a cluster to communicate with each other regardless of the host they are deployed to in the cluster 
1. Bind containers and storage resources
1. Group sets of similar containers and bind them to load-balancing constructs to simplify access to containerized application by creating a level of abstraction between the containers and the user
1. Manage and Optimize resource usage
1. Allow for implementation of policies to secure access to application running inside containers







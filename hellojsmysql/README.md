# kickstart
Instructions for getting started with ITS development infrastructure

We use the MEAN stack as our primary dev stack. Here are the tools to learn:

- IDE https://www.jetbrains.com/student This version is free for students. Download Webstorm.
- Git / Github (www.github.com)
- Jenkins (https://jenkins.io)
- Docker (www.docker.com)
- Node (nodejs.org)
- Angular2 (https://angular.io)

After learning these technologies, follow this tutorial to familiarize yourself with our dev environment:

The swarm is located at:
````
swarm.docker.usc.edu
````
You will need a new set of private keys to communicate with this swarm. These keys are in the swarm-tls directory of a blue USB drive located in the top-right drawer in my office.

Jenkins is now Shibbed and has also moved to the swarm. If you cannot sign-on, please send an email to me or Eric Hattemer ehatteme@usc.edu to be added to the Jenkins group. Jenkins is located at https://jenkins.docker.usc.edu
We also have a registry on the swarm.
To use the registry, push to this URI: registry.docker.usc.edu
Pulls can be done anonymously using this base URI: dtr.docker.usc.edu
Try this quick test:
Checkout this git project:

````
git clone https://github.com/uscdev/hello
cd hello/hellojsmysql
````

Build the project. You don't have to set up a dev environment, docker is all you need.
 
Create a docker image and test it in your local environment:
````
docker build -t uscdev/hello-[yourname] .
docker run --rm -p 4000:4000 uscdev/hello-[yourname]
Point your web browser to:
http://localhost:4000
````

Try to deploy the docker image to our public docker repo:
````
docker login
 username: [docker user]
 password: [your password]
docker push uscdev/hello-[yourname]
````
 
Set your local environment so you can talk to the swarm:
To make the swarm the default target for docker commands, set these params:
For Linux users
````
export DOCKER_CERT_PATH=/home/path to certs/swarm-tls
export DOCKER_TLS_VERIFY=1
export DOCKER_HOST=tcp://dcorley-swarm-mgr01.usc.edu:2376
````

For Windows users, (use powershell, not command prompt)
(Note: the $ sign is a part of the command. Do not exclude it)
````
$env:DOCKER_HOST="tcp://dcorley-swarm-mgr01.usc.edu:2376"
$env:DOCKER_CERT_PATH="/absolute path to certs/swarm-tls"
$env:DOCKER_TLS_VERIFY=1
````
(Note: replace "/absolute path to certs" with the path to the certs on your hard drive)
(Windows note: You may have to escape the backslash in your paths with \\)

(If you don’t have the private certs, see me – on the blue USB drive in the upper left drawer)
 
See if you can run this container on our swarm:
````
docker stack deploy --compose-file docker-compose.yml hello-[yourname]
````
(Take a look at the docker-compose file. Note that the anonymous registry name is different from the authenticated registry name)                                  
 
Point your browser to:
````
https://hello-[yourname].docker.usc.edu
````

Note:- In case the service helloweb already exists, use the commands 
````
docker stack ls  # list the services
docker service ls   # list the running services
docker stack rm hello-[yourname]    # remove the listed service
````
(be very careful with "docker service rm" # do not remove any other services. ) 

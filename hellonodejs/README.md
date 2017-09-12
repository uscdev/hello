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

Checkout this git project:

````
git clone https://github.com/uscdev/hello.git
cd hello/hellonodejs
````

Build the project. You don't have to set up a dev environment, docker is all you need.
 
Please follow below instrctions to build and run the image for this project:
````
docker build -t registry.docker.usc.edu/hellonodejs .
docker push registry.docker.usc.edu/hellonodejs
docker run -it --rm -p 8080:8080 --name hellonodejs -v `pwd`:/usr/src/app  dtr.docker.usc.edu/hellonodejs

````
                                
 
Point your browser to below url to run the app:
````
http://localhost:8080
````

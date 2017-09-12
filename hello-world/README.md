# hello-world

Simple web server

To deploy in a swarm:

````bash
docker stack deploy --compose-file docker-compose.yml hello-world
````

To test go to the web server URL: http://site-url:8080

To delete the stack:
````bash
docker stack rm hello-world
````

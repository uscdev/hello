# hello-world
Docker Flow Proxy Example

This dockerfile builds an automatic reverse-proxy

Check out the hello-world program for a configuration example:
````bash
version: '3.1'

services:
  helloworld:
    image: tutum/hello-world
    networks:
      - proxy
    deploy:
      replicas: 2
      labels:
        - com.df.notify=true
        - com.df.distribute=true
        - com.df.servicePath=/hello-world
        - com.df.port=80
networks:
  proxy:
    external: true

````

The hello-world web site should be located at http://*site*/hello-world
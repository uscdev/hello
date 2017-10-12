# Skel-app

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.2.5.



## 0. Instructions

### Getting started

>1.  Downloading code
>       * Download the skeleton APP from "https://github.com/uscdev/hello" 
>2. Install local angular and node_modules (cd into skel-app folder before running this )
>       * run "npm install --save-dev @angular/cli@latest" in the your project folder 
>3. Deploy the skeleton with docker
>       * run  "docker stack deploy --compose-file docker-compose.yml 'name-of-your-app' "
>       * go to http://localhost:4200/  to see the app 
>       * go to http://localhost:8080/ to see your instances visualized. 
>       * for Chrome use  https://localhost/ 
>5. Deploy the app locally with npm
>       * run 'ng serve'
>       * go to http://localhost:4200/
>6. Deploy the app on Docker locally 
>       * docker run -d --name skel-app -p 4200:4200 masfaw/usc-skel-app:dev  

#### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

#### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|module`.
#### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

#### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

#### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.
#### Further help
To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

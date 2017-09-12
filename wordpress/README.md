Wordpress

Deploy a Wordpress docker stack

**Note:** Remember to create the EFS (NFS) share before deploying:
````bash
docker volume create -d "cloudstor:aws" --opt backing=shared wordpress-data
````

Optional: Move the php.ini file to the wp-content directory
to increase the file upload size.
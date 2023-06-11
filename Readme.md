# Nodejs app deployment with docker + ansible

Deploy your nodejs app on ec2 instance using docker and ansible.

- Create app image
- Publish it to docker registry
- Spin up docker container using the images
- Use caddy and reverse proxy to the docker container

## Task

- [x] Setup multiple environment (prod, staging, dev). It is preferred to use one ec2 instance for each environment.
- [ ] Setup worker instance to run queue jobs. Worker instance does not have to expose http port
- [ ] Hook github action for deployment workflow

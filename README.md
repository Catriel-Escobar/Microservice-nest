<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

## Installation Dev

1. Clone the repository
2. Create an `.env` based on the `.env.template`
3. Execute command `docker compose up --build`

## Installation Prod

1. Clone the repository
2. Create an `.env` based on the `.env.template`
3. Execute command

<!-- create the image of each microservice -->

## create the image of each microservice

```
docker compose -f docker-compose.prod.yml build
```

<!-- Create a container and run the application -->

## Create a container and run the application

```
docker compose -f docker-compose.prod.yml up
```

- LinkedIn - [Catriel Escobar](https://www.linkedin.com/in/catrielescobar/)

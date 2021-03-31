# Scripts

- **start**: Runs the app.
- **server**: Runs the app with Nodemon.
- **migrate**: Migrates the local development database to the latest.
- **rollback**: Rolls back migrations in the local development database.
- **seed**: Truncates all tables in the local development database, feel free to add more seed files.
- **test**: Runs tests.
- **deploy**: Deploys the main branch to Heroku.
- **migrateh**: Migrates the Heroku database to the latest.
- **rollbackh**: Rolls back migrations in the Heroku database.
- **databaseh**: Interact with the Heroku database from the command line using psql.
- **seedh**: Runs all seeds in the Heroku database.

# BackEnd API

## Deployed URL:
### https://alc-water-my-plants.herokuapp.com/

## Models

### Users
```
{
    id:           int         *AUTO-INCREMENTED*
    firstname:    string
    lastname:     string
    username:     string      *REQUIRED*
    password:     string      *REQUIRED*
    phone:        string      *REQUIRED*
    email:        string
}
```
### Plants
```
{
    id:             int         *AUTO-INCREMENTED*
    nickname:       string      *REQUIRED*
    species:        string      *REQUIRED*
    h20_frequency:  int         *REQUIRED*
    h2o_units:      string      *REQUIRED*
    image_url:      string
}
```

# Endpoints

## Users/Auth

| Request Type | Endpoint                   | Description            |
|:------------:|:--------------------------:|:----------------------:|
| POST         | /api/v1/users              | Creates User           |
| POST         | /api/v1/users/login        | Creates Auth Token     |
| GET          | /api/v1/users/logout       | Ends User Session      |
| GET          | /api/v1/users              | Get All Users          |
| GET          | /api/v1/users/:id          | Get Specific User      |
| PATCH        | /api/v1/users/:id          | Update User            |
| DELETE       | /api/v1/users/:id          | Remove User            |

## Plants
| Request Type | Endpoint                  | Description             |
|:------------:|:-------------------------:|:-----------------------:|
| GET          | /api/v1/plants             | Get All Plants          |
| GET          | /api/v1/plants/:id         | Get Specific Plant      |
| POST         | /api/v1/plants             | Add Plant               |
| PATCH        | /api/v1/plants/:id         | Update Plant            |
| DELETE       | /api/v1/plants/:id         | Remove Plant            |

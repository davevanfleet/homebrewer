# HOMEBREWER

This project is a collection of docker containers that support an iOS application for hobbyist homebrewers.

## Installation

- Fork and clone this repository
- Start project with `docker-compose up`

## Containers

### homebrewerapi

Express.js RESTful API. Serves `recipe`, `grain`, `hop`, `malt`, and `yeast` resources.  
Can be viewed at `localhost:3000`

### homebrewerdb

CouchDB instance for storing recipes and all ingredients.


# BackEnd Gym Circle

## Requirements

- code editor (vs code)
- install node js

## How to setup

- in the command line go to the directory of this project
- in the command line type `npm install`

## How to run

- in the command line type `npm run serve`

## Folder Struture

### index.ts

- this is where the magic happens, where all the routes are imported and stuff

### .env

- this is not available in our repo for i added it in the git ignore
  just pm me for the .env this is crucial btw.

  #### how to use

  - just add `process.env."environment name"`

### /public

- where html renders are stored and images i guess

### /src

- this is where all the stuff is stored

  #### /routes

  - this is where our routes is held. the names of the file correspond on what they are req/res they are responsible for

  #### /middleware

  - middleware is the function that checks the requests and if you have the right the authentication.

  #### /public

  - where html renders are stored and images i guess

  #### /config

  - this is where the database connections lies

  #### /controller

  - this is where all the functions are stored for the corresponding routes

  #### /utils

  - functions that are spread around the code base for utility

### ROUTES 🚗

#### LOGIN/REGISTER 🌲

- POST `api/login/`
  - Query:
    - userEmail: string
    - password: string
  - Response:
    - the key that you will need to access the user route
- PUT `api/login/register`
  - Query:
    - userName: string
    - password: string
    - Name: string
    - Age: number
    - Address: string
    - Tier: string
    - Points: number
  - Purpose:
    - registers user to the database

#### USER 🤓

- GET `api/user/announcements`
  - gets announcements
- GET `api/user/`
  - Purpose:
    - this gets the data to the logged in user
- PUT `api/user/transaction`

  - Query:
    - name: string (name of what you're buying)
    - type: 'points' | 'subscription'
    - price: the price
  - Purpose:
    - this posts a transaction receipt to the database

- PATCH `api/user/`

  - Query:
    - name: string
    - age: number
    - address: string
  - Purpose:
    - updates the user info

- PUT`ape/user/transaction`

#### ADMIN :godmode:

- GET `api/user/announcements`

  - gets announcements

- PATCH `api/user/announcements/:id`

  - patch announcments
    Query:
    "type": string,
    "description":string

- PUT `api/user/announcements`

  - add announcments
    Query:
    "type": string,
    "description":string

- DELETE `api/user/announcements/:id`
  - deletes announcments
    Query:
    "type": string,
    "description":string
- GET `api/admin/phrase`

  - Query:
    - phrase: string
  - Purpose:
    - This is the added security for admins

- PATCH `api/admin/phrase`
  - Query:
    - phrase: string
  - Purpose:
    - change the phrase
- POST `api/admin/`

  - this is for log in
  - Query:
    - userName: string
    - password: string

- PUT `api/admin/`

  - this is for registration
  - Query:
    - email: string
    - name: string
    - password: string

- GET `api/admin/users`

  - gets all users

- PATCH `api/admin/users/:id`

  - this updates the user given the id
  - Query:
    - Name: string
    - userEmail: string
    - Age: number
    - Address: string
    - Tier: string
    - Points: number
    - UserID: number
  - Params:
    - id: number

- DELETE `api/admin/users/:id`
  - deletes user given the id
- GET `api/admin/transaction`

  - gets all transactions from all users

- PATCH `api/admin/transaction/:id`

  - changes the status of the transaction
  - Query:
    - status: string

- PATCH `api/admin/attendance/:id`

  - increments the user attendance

- PATCH `api/admin/points-transaction/id`
  params:
  this is for the users points transaction

  - id of the transaction

- POST `api/admin/guest`

  - creates a transaction for guests (walk ins)
  - Query:
    - name: string (tier of subscription)
    - price: number the price

- PATCH `api/admin/subscription-add/:id`
  - This is for subscript points dagdag and shit
  - Query:
    -points:number
  - Params:
    - id: for user members

# Lue's guide to commit messages:

When adding a commit message add this prefix and the a brief details of your commits for the heading. Then follow up with a full extent of your added feature in the body

    - feat – a new feature is introduced with the changes

    - fix – a bug fix has occurred

    - chore – changes that do not relate to a fix or feature and don't modify src or test files (for example updating dependencies)

    - refactor – refactored code that neither fixes a bug nor adds a feature

    - docs – updates to documentation such as a the README or other markdown files

    - style – changes that do not affect the meaning of the code, likely related to code formatting such as white-space, missing semi-colons, and so on.

    - test – including new or correcting previous tests

    - perf – performance improvements

    - ci – continuous integration related

    - build – changes that affect the build system or external dependencies

    - revert – reverts a previous commit

Example:
`feat: createded a function to remove all the redundant data`

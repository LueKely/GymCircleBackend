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

## DUMP

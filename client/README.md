# Personal Task Manager

## Description

A full-stack task management application built using React and Node.js. Users can create, edit, delete, and manage tasks with due dates and completion status.

## Features

* Add Task
* Edit Task
* Delete Task
* Toggle Complete/Incomplete
* Filter Tasks (All, Active, Completed)
* Search Tasks
* Overdue Task Highlight
* Persistent Storage using JSON

## Tech Stack

Frontend:

* React
* Axios
* Vite

Backend:

* Node.js
* Express

Storage:

* JSON File

## Run Locally

Backend:

cd server

npm install

node server.js

Frontend:

cd client

npm install

npm run dev

## API Endpoints

GET /tasks

POST /tasks

PUT /tasks/:id

PATCH /tasks/:id/toggle

DELETE /tasks/:id

## Future Improvements

* User Authentication
* Drag and Drop Tasks
* Notifications
* Database Integration

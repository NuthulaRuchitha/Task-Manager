# Personal Task Manager

## Project Description

Personal Task Manager is a full-stack web application built using React and Node.js that allows users to create, manage, update, and track personal tasks. Users can add tasks with descriptions and due dates, edit existing tasks, mark tasks as completed, filter tasks by status, and search tasks by title.

## Features

* Add Task
* Edit Task
* Delete Task
* Toggle Complete/Incomplete Status
* Filter Tasks (All, Active, Completed)
* Search Tasks by Title
* Overdue Task Highlighting
* JSON File Persistence

## Tech Stack

### Frontend

* React
* Axios
* Vite

### Backend

* Node.js
* Express.js

### Storage

* JSON File

## Project Structure

task-manager/

├── client/

│   ├── src/

│   │   ├── components/

│   │   │   ├── TaskForm.jsx

│   │   │   ├── TaskList.jsx

│   │   │   ├── TaskItem.jsx

│   │   │   └── FilterBar.jsx

│   │   ├── api.js

│   │   ├── App.jsx

│   │   └── App.css

│

├── server/

│   ├── routes/

│   │   └── tasks.js

│   ├── data/

│   │   └── tasks.json

│   └── server.js

│

└── README.md

## How to Run Locally

### Backend

```bash
cd server
npm install
node server.js
```

### Frontend

```bash
cd client
npm install
npm run dev
```

## API Documentation

### Get All Tasks

GET /tasks

Response:

```json
[
  {
    "id": "123",
    "title": "Complete Assignment",
    "completed": false
  }
]
```

### Create Task

POST /tasks

Request Body:

```json
{
  "title": "Learn React",
  "description": "Practice React components",
  "dueDate": "2026-06-10"
}
```

### Update Task

PUT /tasks/:id

### Toggle Task Status

PATCH /tasks/:id/toggle

### Delete Task

DELETE /tasks/:id

## Future Improvements

* User Authentication
* Drag and Drop Task Reordering
* Email Notifications
* Database Integration (MongoDB/PostgreSQL)
* Dashboard Analytics

## Author

Ruchitha Nuthula

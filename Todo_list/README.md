# TODO List Application

## Overview

This TODO List Application is a simple and efficient tool for managing your tasks. Built with React, it provides a user-friendly interface to add, edit, delete, and mark tasks as completed. The application also supports search functionality using URL parameters, allowing users to quickly filter tasks based on keywords.

## System Design

The application consists of several components:
- **App**: The main component that manages the state of the tasks and handles the logic for adding, deleting, completing, and filtering tasks.
- **Title**: A component for inputting the title of a new task.
- **Description**: A component for inputting the description of a new task.
- **Button**: A component for adding a new task.
- **Button2**: A component for viewing pending tasks.
- **Button3**: A component for viewing completed tasks.
- **Expandable**: A component for displaying individual tasks with options to edit, delete, and mark as completed.
- **Expandable2**: A component for displaying completed tasks with options to delete.
- **Search**: A component for filtering tasks based on a search query.

The state management and routing are handled using React's `useState`, `useEffect` hooks, and `react-router-dom` for URL parameter handling.

## Implementation

### Adding Tasks

When a user inputs a title and description and clicks the add button, a new task is created and stored in the local storage. The tasks are managed in the state of the `App` component and updated accordingly.

### Editing Tasks

The application allows users to edit tasks by clicking on the edit icon. The task details become editable, and the user can save the changes, which are then updated in the local storage and state.

### Deleting Tasks

Users can delete tasks by clicking the delete icon next to each task. This action removes the task from the state and updates the local storage.

### Marking Tasks as Completed

When a task is marked as completed, it is moved to a separate list of completed tasks. The completed tasks are also stored in the local storage and managed in the state.

### Search Functionality

The search functionality is implemented using URL parameters. When a user types a search query, the URL is updated with the search parameter, and the task list is filtered based on the query.

## Setup and Running the Application

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/miravanisri/Todo_App_Assignment.git
2. Navigate to the project directory:
   ```bash
   cd todo-list-app
3. Install the dependencies:
   ```bash
   npm install

### Running the Application
1. Start the development Server
   npm run dev


### Building the Application
    To build the application for production,run:
    npm run build

This will create an optimized build of the application in the build directory.

### Deployment
    You can deploy the built application to any static site hosting service like Vercel, Netlify, or GitHub Pages.

### Contributing
    If you would like to contribute to the project, please fork the repository and submit a pull request with your changes.

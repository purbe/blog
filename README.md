# Blog Application

A blog site built using React.js and Appwrite.

## Features

- Create, edit, and delete blog posts
- User authentication and authorization
- Responsive design for various devices

## Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (version 16 or higher)
- [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/)
- [Appwrite](https://appwrite.io/) server set up

## Installation

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/purbe/blog.git
   cd blog
2. Install Dependencies:
    ``` 
   npm install
   yarn install
   ```
3. Configure Appwrite:
- Set up an Appwrite project and note the project ID.
- Create a database and collection for blog posts.
- Set up authentication (e.g., email/password) if required.
- Update the Appwrite endpoint and project ID in your application configuration.

## Usage
1. **Start the Application:**
npm run dev
2. **Open in Browser:**
Navigate to http://localhost:3000 to interact with the application.

## Available Scripts
- dev: Starts the development server with hot reloading.
- build: Builds the application for production.
- serve: Serves the production build locally.
- lint: Runs ESLint to check for code quality issues.

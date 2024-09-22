# Distant Learning Questionnaire System

## Overview

This project is a web application designed to assist distant learning professors at a university by allowing them to create and manage questionnaires. Each questionnaire consists of multiple questions, each with multiple answers, a weight for scoring, and one correct answer.

## Tech Stack

This project utilizes the following technologies:

- **Frontend:**

  - React.js
  - Next.js

- **Backend:**

  - Node.js
  - Express.js
  - TypeScript
  - MongoDB (with Mongoose for object modeling)

- **Other:**
  - GitHub for version control
  - REST APIs for communication between frontend and backend

## Features

- Create questionnaires with:
  - Multiple questions
  - Multiple answers per question
  - Weight assigned to answers (1, 2, or 3)
  - One correct answer per question
- Fetch all questionnaires with pagination support

## Considerations

- **Database Structure:**
  - Each questionnaire, question, and answer is stored in separate collections for better organization and maintainability.
- **Error Handling:**

  - Implemented a standardized error handling mechanism for consistent messaging across the application.

- **Scalability:**

  - Designed with scalability in mind, making it easier to extend features and functionalities in the future.

- **Transaction Management:**
  - Used MongoDB transactions to ensure data integrity during the creation of questionnaires.

## Setup Instructions

Follow these steps to set up the project locally:

1. **Clone the repository:**
   ```bash
   git clone <your-repo-url>
   cd <your-project-directory>
   ```
2. **Install Node.js: Make sure you have Node.js installed on your machine.**
3. **Install dependencies:**
   ```bash
   npm install
   ```
4. **Set up environment variables: Copy the example environment file:**
   ```bash
   cp .env.example .env
   ```
5. **Start the development server:**
   ```bash
   npm start
   ```
   The backend server should now be running on http://localhost:3001.
6. **Production build:**
   ```bash
   npm run build
   ```

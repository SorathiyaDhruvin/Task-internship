# Rick and Morty API Explorer

A full-stack web application that fetches and displays random characters from the Rick and Morty universe.

## Tech Stack
* **Frontend**: React (built with Vite)
* **Backend**: Node.js, Express

## Project Structure
* `frontend/`: Contains the React web application.
* `backend/`: Contains the Express server that acts as a proxy/API layer.

## Setup and Installation

### Prerequisites
* Node.js
* npm

### Backend Setup
1. Navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the backend server (runs on port 5000 by default):
   ```bash
   npm run dev
   ```

### Frontend Setup
1. Open a new terminal and navigate to the frontend directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the React development server:
   ```bash
   npm run dev
   ```

## Features
* Fetch a random Rick and Morty character with a single click.
* Displays the character's image alongside the raw JSON response data.
* Clean and simple UI to explore the data.

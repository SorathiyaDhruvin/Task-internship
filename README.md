# Dog API Full-Stack Project

## 1. Project Overview
This project is a simple full-stack web application that fetches random dog images from the public Dog CEO API. The application uses a React frontend to display the user interface and an Express (Node.js) backend to handle the external API requests securely.

## 2. Technologies Used
**Frontend:**
- React (bootstrapped with Vite)
- JavaScript
- Vanilla CSS

**Backend:**
- Node.js
- Express.js
- CORS
- dotenv
- Node Fetch API (Native)

## 3. Project Structure
```
dog-api-react/
├── backend/                  # Express server
│   ├── controllers/
│   │   └── dogController.js  # Handle request/response logic
│   ├── routes/
│   │   └── dogRoutes.js      # Define API routes
│   ├── services/
│   │   └── dogService.js     # External API communication
│   ├── server.js             # Main server entry point
│   ├── package.json
│   └── .env                  # Environment variables
├── frontend/                 # React application
│   ├── public/
│   ├── src/
│   │   ├── components/       # Reusable UI components
│   │   │   ├── ApiInput.jsx
│   │   │   ├── DogImage.jsx
│   │   │   └── JsonResponse.jsx
│   │   ├── App.jsx           # Main React component
│   │   ├── App.css           # Styling
│   │   ├── index.css         # Global styling
│   │   └── main.jsx
│   ├── package.json
│   └── vite.config.js
└── README.md
```

## 4. How the Frontend Works
The React frontend renders a clean user interface containing a read-only input field showing the target URL and a "Fetch!" button. When the button is clicked, it makes an HTTP GET request to the local Express backend (`http://localhost:5000/api/dog`). The application manages its loading, error, and data states using React hooks. Once data is received, the JSON response and the extracted dog image are displayed side-by-side using the `JsonResponse` and `DogImage` components.

## 5. How the Backend Works
The backend is built using Express.js. It listens on port 5000 (configured via `.env`). The API structure is separated into routes, controllers, and services to maintain clean architecture.
- **Routes**: Defines the `/api/dog` endpoint.
- **Controller**: Triggers the service logic and manages HTTP responses (sending JSON or handling errors).
- **Service**: Makes the actual HTTP request to the external Dog CEO API.

## 6. API Flow
React (Frontend)
  ↓ GET /api/dog
Express Backend (Server)
  ↓ GET https://dog.ceo/api/breeds/image/random
Dog CEO API
  ↓ Returns JSON
Express Backend
  ↓ Returns JSON
React (Frontend) -> Updates UI

## 7. Installation Steps
1. Clone or download the repository.
2. Ensure you have Node.js installed.
3. Open two terminal windows/tabs to run the frontend and backend separately.

## 8. How to run backend
Navigate to the `backend` directory, install dependencies, and start the development server:
```bash
cd backend
npm install
npm run dev
```
The server will run on `http://localhost:5000`.

## 9. How to run frontend
Navigate to the `frontend` directory, install dependencies, and start the development server:
```bash
cd frontend
npm install
npm run dev
```
The app will run typically on `http://localhost:5173`.

## 10. Example API Response
```json
{
  "message": "https://images.dog.ceo/breeds/hound-walker/n02089867_1578.jpg",
  "status": "success"
}
```

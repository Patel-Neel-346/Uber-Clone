# Uber Clone

This is a full-stack Uber Clone application built with Node.js, Express, MongoDB, React, and Vite. The application includes features such as user and captain registration, ride creation, fare calculation, and real-time ride tracking using Google Maps API.

## Features

- User and Captain Registration and Authentication
- Ride Creation and Fare Calculation
- Real-time Ride Tracking using Google Maps API
- Ride Confirmation and OTP Verification
- Ride Start and End Functionality
- Location Suggestions and Distance Calculation

## Technologies Used

- **Backend**: Node.js, Express, MongoDB
- **Frontend**: React, Vite, Tailwind CSS
- **Real-time Communication**: Socket.io
- **Maps and Location Services**: Google Maps API

## Getting Started

### Prerequisites

Make sure you have the following installed on your machine:
- Node.js
- npm or yarn
- MongoDB

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/uber-clone.git
   ```

2. Navigate to the project directory:
   ```sh
   cd uber-clone
   ```

### Backend Setup

1. Navigate to the backend directory:
   ```sh
   cd backend
   ```

2. Install the dependencies:
   ```sh
   npm install
   # or
   yarn install
   ```

3. Create a `.env` file in the backend directory and add the following environment variables:
   ```
   PORT=8000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   GOOGLE_MAPS_API_KEY=your_google_maps_api_key
   ```

4. Start the backend server:
   ```sh
   npm run dev
   # or
   yarn dev
   ```

### Frontend Setup

1. Navigate to the frontend directory:
   ```sh
   cd ../frontend
   ```

2. Install the dependencies:
   ```sh
   npm install
   # or
   yarn install
   ```

3. Create a `.env` file in the frontend directory and add the following environment variables:
   ```
   VITE_API_URL=http://localhost:8000
   VITE_GOOGLE_MAPS_API_KEY=your_google_maps_api_key
   ```

4. Start the frontend development server:
   ```sh
   npm run dev
   # or
   yarn dev
   ```

This will start the application on `http://localhost:3000`.

## Project Structure

### Backend

- `controllers/`: Contains the logic for handling requests and responses.
- `models/`: Contains the Mongoose schemas and models.
- `routes/`: Contains the route definitions.
- `services/`: Contains the business logic and external API calls.
- `middlewares/`: Contains the middleware functions for authentication and validation.
- `socket.js`: Contains the logic for real-time communication using Socket.io.
- `server.js`: Entry point for the backend server.

### Frontend

- `src/`: Contains the source code of the application.
  - `components/`: Reusable components.
  - `context/`: Context providers for state management.
  - `pages/`: Different pages of the application.
  - `App.jsx`: Main application component.
  - `main.jsx`: Entry point of the application.
- `public/`: Public assets.
- `index.html`: Main HTML file.
- `vite.config.js`: Vite configuration file.
- `package.json`: Project configuration and dependencies.

## Google Maps API

The application uses Google Maps API for various location-based services such as:
- Geocoding: Converting addresses into geographic coordinates.
- Distance Matrix: Calculating the distance and time between two locations.
- Place Autocomplete: Providing location suggestions based on user input.

To use Google Maps API, you need to obtain an API key from the Google Cloud Console and add it to the `.env` files in both the backend and frontend directories.

## Advantages

- **Scalability**: The application is built with scalable technologies such as Node.js and MongoDB.
- **Real-time Communication**: The use of Socket.io enables real-time communication between users and captains.
- **Modular Architecture**: The project is organized into separate modules for better maintainability and extensibility.
- **Responsive Design**: The frontend is built with Tailwind CSS, ensuring a responsive and modern user interface.

## Learn More

To learn more about the technologies used in this project, check out the following resources:

- [Node.js Documentation](https://nodejs.org/en/docs/)
- [Express Documentation](https://expressjs.com/)
- [MongoDB Documentation](https://docs.mongodb.com/)
- [React Documentation](https://reactjs.org/)
- [Vite Documentation](https://vitejs.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/)
- [Socket.io Documentation](https://socket.io/docs/)
- [Google Maps API Documentation](https://developers.google.com/maps/documentation)

## Contributing

If you would like to contribute to this project, please fork the repository and submit a pull request with your changes.

## License

This project is licensed under the MIT License.

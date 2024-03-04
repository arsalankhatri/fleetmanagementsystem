# Fleet Management System - Backend

This is the backend part of the Fleet Management System, developed using Node, TypeScript, and MongoDB. It provides API endpoints for vehicle registration, tracking, maintenance records, and usage analytics



## Getting Started

Follow these steps to set up and run the Fleet Management System backend:

### Prerequisites

1. Node.js and npm: Make sure you have Node.js and npm installed on your machine.

2. MongoDB: Install MongoDB and make sure it's running. Configure the connection in `.env` file.

### Installation

### Clone this repository:

   ```
   git clone https://github.com/arsalankhatri/fleetmanagementsystem.git
   cd fleet-management-backend
   ```
### Install dependencies:

```npm install```

### Set up your MongoDB database:

* Create a new database for the Fleet Management System. (suggested_name: **vehicle_tacking_db** )
* Configure the MongoDB connection in ```.env``` file.

### Start the server

```npm start```

The server will be available at http://localhost:3001.

### Swagger Documentation
* Swagger documentation is available at http://localhost:3001/api-docs.

### Testing
Run the tests:

```npm test```

### Project Structure Explanation
* src/
* controllers/: Contains controller files handling business logic.
* models/: Contains model files defining the database schema.
* routes/: Defines API routes.
* api/: API route files.
* services/: Services for interacting with APIs or external services.
* test/: Contains test files.

### API Endpoints

* **Vehicle Registration**: /api/vehicles (POST)
* **Vehicle Tracking**: /api/vehicle-tracking (GET)
* **Maintenance Records**: /api/maintenance (GET, POST)
* **Usage Analytics**: /api/analytics (GET)

### Dependencies
* Node.js
* TypeScript
* MongoDB
* Express
* Swagger (for API documentation)


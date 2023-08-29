## Project Name: tanameracoffee.com clone with React, Inline Tailwind CSS, Fullstack Features, and Role-Based Access

Welcome to the "Tanamera Coffee Clone" project repository! This comprehensive project aims to replicate the Tanamera Coffee website while incorporating a full stack approach, including React for the front-end, Inline Tailwind CSS for styling, PostgreSQL for the database, Express.js for the server, and Redux for state management. The project also implements React Router for user and admin routes, Redux-Thunk for handling asynchronous actions, and SQL transactions for data integrity. Let's explore the project in more detail:

### Key Features

1. **User-Side Routing: Home and Detail Pages**
   - Implement user-side routing using React Router.
   - Create a dynamic home page showcasing an array of coffee products.
   - Develop detailed pages for individual coffee products.

2. **Admin-Side Routing: Authentication, Admin Management, and CRUD Operations**
   - Set up admin-side routing for managing administrative tasks.
   - Create an authentication system for admin users to log in.
   - Develop pages for adding admin users, performing CRUD operations on primary entities, and another set of CRUD operations on secondary entities.

3. **PrivateRoute for Admin Access**
   - Design a PrivateRoute component to secure admin routes.
   - Ensure that only authenticated admin users can access admin-specific pages.

4. **State Management with Redux**
   - Compare the concepts of local state and global state.
   - Construct a Redux store to manage application-wide state.
   - Develop reducers to handle state modifications.
   - Define actions to trigger state updates.
   - Implement action creators and action types for enhanced organization.

5. **Handling Asynchronous Actions with Redux-Thunk**
   - Leverage the Redux-Thunk middleware to manage asynchronous actions.
   - Seamlessly manage API requests and responses within Redux.

6. **Combining Reducers for Enhanced Scalability**
   - Explore the utilization of `combineReducers` to manage multiple reducers effectively.

7. **SQL Transactions and Association Management**
   - Develop an Express.js server with PostgreSQL, utilizing the Sequelize ORM.
   - Define and manage associations between various database tables.
   - Implement SQL transactions to ensure data consistency during the creation of new entities.

8. **Deployment on AWS EC2**
   - Gain insights into deploying the application on an AWS EC2 instance. 

### How to Access the Project

1. **Installation:** Clone this repository to your local machine and navigate to the project directory.

2. **Install Dependencies:** Execute the command `npm install` to install all the required packages and dependencies.

3. **Database Configuration:** Set up a PostgreSQL database and configure the connection details in the server code (`server/config/config.json`).

4. **Run the Server:** Navigate to the `server/` directory and initiate the server using `npm start`.

5. **User-Side Access:** Navigate to the `src/` directory and initiate the server using `npm run dev`. Access the user interface by visiting `http://localhost:5173/`.

6. **Admin-Side Access:** Navigate to the `src/` directory and initiate the server using `npm run dev`. Access the admin interface by visiting `http://localhost:5174/`.

### Project Directory Structure

- `client/`: Houses the React front-end code.
  - `src/`: Main React application directory.
    - `components/`: Reusable UI components.
    - `pages/`: Main application pages.
    - `redux/`: Contains Redux store, reducers, actions, and types.
    - `router/`: Manages routing in the application.
- `server/`: Contains the Express.js back-end code.
  - `config/`: Configuration files, including the database connection settings.
  - `models/`: Sequelize models and associations.
  - `routes/`: API routes and controllers.
  - `middlewares/`: Custom middlewares for authentication and authorization.
  - `controller/`: Handles the logic for specific routes and interactions with models.
  - `data/`: Placeholder for JSON data or data-related files.
  - `helpers/`: Utility functions or helper modules.
  - `migrations/`: Database migrations for managing schema changes.
  - `router/`: Manages the routing logic and configuration.
  - `seeder/`: Seed files for populating the database with initial data.

### Contribution

Contributions are greatly appreciated! To contribute, follow these steps:

1. Fork this repository to your GitHub account.
2. Create a new branch for the feature you intend to add (`git checkout -b new-feature`).
3. Implement the feature and commit your changes (`git commit -m "Add new feature"`).
4. Push your changes to the branch on your GitHub account (`git push origin new-feature`).
5. Submit a Pull Request for reviewing your changes.

### License

This project is licensed under the [MIT License](link-to-license), granting you the freedom to use it within the terms of the license.

Thank you for exploring the "Tanamera Coffee Replica" project with comprehensive full-stack features! For questions or feedback, feel free to create a [new issue](link-to-issues) in this repository. Enjoy exploring and developing with the "Tanamera Coffee Replica" project!

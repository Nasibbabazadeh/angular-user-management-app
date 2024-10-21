# UserPost Application

**UserPost** is a web application designed to easily manage users and their posts. The app allows administrators to perform CRUD operations (Create, Read, Update, Delete) on users and their posts, while providing a seamless user experience with modern UI and functionalities.

## Features

-   **User Management**: Add, edit, delete, and view user details.
-   **Post Management**: Manage posts related to users, with features for filtering and pagination.
-   **Responsive UI**: The app is built with Tailwind CSS to ensure a responsive design across devices.
-   **Notifications**: Toast notifications are integrated for success, error, and informational messages.
-   **Pagination**: Efficient pagination for managing large datasets.

## Technologies Used

-   **Angular 17**: The framework used for building the app's core functionalities.
-   **Tailwind CSS**: For styling and making the application responsive.
-   **RxJS**: For managing reactive programming and asynchronous events.
-   **Toast**: For user notifications (success, error, etc.).
-   **Pagination Controller**: For handling data pagination effectively.

## Getting Started

### Prerequisites

To run this project locally, ensure you have the following tools installed:

-   [Node.js](https://nodejs.org/) (v16 or later)
-   [Angular CLI](https://angular.io/cli) (v17 or later)

### Installation

1. Clone the repository:
    ```
    git clone https://github.com/your-repository/userpost-app.git
    cd userpost-app
    ```
2. Install dependencies:
    ```
    npm install
    ```
3. Running the Application
    ```
    ng serve
    ```
    or run the application and open automatically
    ```
    ng serve --open
    ```
    This will serve the app at http://localhost:4200/ by default.But If you want to change port write
    ```
    ng serve --port 3000
    ```
4. Building the Application

    ```
    npm run build
    ```

    This will create a dist/ folder containing the optimized build for deployment.

5. Testing the Application
    ```
    npm test
    ```
6. Watching for Changes

    To build and watch for changes continuously in development mode:

    ```
    npm run watch
    ```

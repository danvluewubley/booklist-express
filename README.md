# Booklist Application
## Overview
The Booklist Application is a full-stack project designed to help users manage their book collection. It features a user-friendly interface for adding and viewing. The app utilizes React for the frontend, Express.js and PostgreSQL for the backend, and Vite for fast development and build processes.

## Features
* Add New Books: Users can add books to their list with details like title, author, genre, and description.
* View Booklist: Display a list of all books with their details.
* User Authentication: Secure user login and registration using cookies.

## Technologies Used
* **Frontend**: React, Tailwind CSS, Vite
* **Backend**: Express.js, PostgreSQL, Sequelize
* **Authentication**: Cookies for secure login
* **API**: Axios for handling HTTP requests

## Installation
### Frontend
1. Clone the repository:
```
git clone https://github.com/your-username/booklist-app.git
```
2. Navigate to the client directory:
```
cd booklist-app/client
```
3. Install dependencies:
```
npm install
```
4. Start the development server:
```
npm run dev
```
### Backend
1. Navigate to the server directory:
```
cd booklist-app/server
```
2. Install dependencies:
```
npm install
```
4. Set up the database:
   * Ensure PostgreSQL is installed and running.
   * Create a database and configure the connection in config/config.json.
5. Run database migrations:
```
npx sequelize-cli db:migrate
```
6. Start the backend server:
```
npm start
```

## Contributing
1. Fork the repository.
2. Create a new branch:
```
git checkout -b feature/your-feature
```
3. Commit your changes:
```
git commit -m "Add your feature description"
```
4. Push to the branch:
```
git push origin feature/your-feature
```
5. Open a pull request on GitHub.

## License
This project is licensed under the MIT License - see the LICENSE file for details.

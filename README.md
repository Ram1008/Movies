# Movie List with Favorites

This project is a React application that displays a list of movies fetched from an API, with the ability to add or remove movies from a favorites list. The application uses Redux for state management and includes functionality to toggle between viewing all movies and only the favorites.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup and Installation](#setup-and-installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Features

- Fetches a list of movies from a remote API.
- Displays the list of movies.
- Allows users to add or remove movies from a favorites list.
- Toggle between viewing all movies and only the favorites.
- Highlights the active tab (All movies or Favorites).

## Technologies Used

- React
- Redux Toolkit
- Redux Thunk
- Axios
- CSS Modules

## Setup and Installation

To get started with the project, follow these steps:

   ```bash
git clone https://github.com/your-username/movie-list.git
cd movie-list
npm install
npm start
```
Project Structure
movie-list/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── app/
│   │   └── store.js
│   ├── components/
│   │   └── DataList.js
│   ├── features/
│   │   └── dataSlice.js
│   ├── styles/
│   │   └── styles.module.css
│   ├── App.js
│   ├── index.js
│   └── ...
├── .gitignore
├── package.json
├── README.md
└── ...


This `README.md` file provides an overview of the project, including features, technologies used, setup and installation instructions, usage guidelines, project structure, contribution guidelines, and licensing information. Make sure to customize any placeholders such as the GitHub repository URL and your name as needed.

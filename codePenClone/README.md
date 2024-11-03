# CodePen Clone

A clone of [CodePen](https://codepen.io), a popular online code editor and community platform for front-end developers. This project is built with **React** for the frontend and **Firebase** for backend services, including authentication and database. Users can create, edit, and preview HTML, CSS, and JavaScript code snippets (referred to as "Pens"), with real-time updates and an intuitive user interface.

## Live Demo

You can view the live version of this project on Vercel: [CodePen Clone](https://code-pen-clone-ts.vercel.app)

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Firebase Setup](#firebase-setup)
- [Usage](#usage)
- [Future Enhancements](#future-enhancements)
- [Contributing](#contributing)
- [License](#license)

## Features

- **User Authentication**: Users can sign up and log in securely using Firebase Authentication.
- **Create and Save Pens**: Users can create new projects (referred to as "Pens") and save them to their profile for later access.
- **Code Editor with Real-Time Preview**: Integrated editor for HTML, CSS, and JavaScript with real-time output.
- **User Profile**: Users can view and manage their saved Pens from their profile page.
- **Responsive Design**: The UI adapts seamlessly to different screen sizes, making it accessible from both desktop and mobile devices.
- **Persistent Data Storage**: All pens and user data are stored in Firebase Firestore, enabling data persistence and user-specific content.

## Technologies Used

- **Frontend**: 
  - [React](https://reactjs.org/) - for building the user interface
  - [React Router](https://reactrouter.com/) - for routing and navigation
  - [Tailwind CSS](https://tailwindcss.com/) - for styling and layout
- **Backend**:
  - [Firebase Authentication](https://firebase.google.com/products/auth) - for user authentication
  - [Firebase Firestore](https://firebase.google.com/products/firestore) - for storing user data and pens
- **Deployment**: 
  - [Vercel](https://vercel.com/) - for hosting and deploying the application

## Project Structure

```plaintext
codepen-clone/
├── public/                     # Public assets
├── src/
│   ├── assets/                 # Images, icons, and other assets
│   ├── components/             # Reusable components (e.g., Editor, UserProfile, etc.)
│   ├── config/                 # Firebase configuration
│   ├── container/              # Main containers for different pages (e.g., Home, Auth)
│   ├── store/                  # State management files
│   ├── utils/                  # Utility functions
│   ├── App.js                  # Main app component
│   ├── index.js                # Main entry point
├── .env                        # Environment variables for Firebase
└── README.md                   # Project documentation

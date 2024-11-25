# Weather Tracker App 🌤️

A simple, responsive web application built with **React** and **JavaScript** that provides real-time weather information. The app uses an external weather API to fetch data and displays key weather metrics for different locations. Hosted live on [Vercel](https://weather-tracker-ts.vercel.app/).

---

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Screenshots](#screenshots)
- [Technologies and Packages](#technologies-and-packages)
- [Learning Outcomes](#learning-outcomes)
- [Future Improvements](#future-improvements)
- [Getting Started](#getting-started)
- [License](#license)

---

## Overview

The **Weather Tracker App** is designed to allow users to:
- Search for a city to view its current weather conditions.
- Get a detailed breakdown of temperature, wind speed, humidity, and more.
- Experience a clean, responsive design that adapts seamlessly to devices of all sizes.

This project was created as part of learning **React** and **JavaScript**, and focuses on integrating APIs, managing states, and ensuring a seamless user experience.

---

## Features

### ✅ Weather Data Display
- Displays **current temperature**, **weather conditions**, **wind speed**, and **humidity**.
- Uses [OpenWeather API](https://python3-dot-parul-arena-2.uc.r.appspot.com/test?cityname=London?cityname=) to fetch real-time data.

### ✅ Search Functionality
- Dynamically searches for cities using the API.
- Handles invalid searches with appropriate feedback.

### ✅ Responsive Design
- Optimized for both desktop and mobile users.

### ✅ Extra Features
- Clean and minimalist UI.
- Error handling for API responses and connectivity issues.

---

## Screenshots


![Search Component](./src/assets/Screenshot%20(242).png)
*Search functionality where users can look up weather details.*

![Weather Details](./src/assets/Screenshot%20(241).png)
*Detailed weather breakdown including temperature, wind speed, and more.*

---

## Technologies and Packages

### Core Technologies
- **React**: For building the UI.
- **JavaScript**: Ensures type safety and cleaner code.

### Additional Packages
- **Axios**: For making HTTP requests to the weather API.
- **React Icons**: For adding visually appealing icons to enhance the UI.
- **CSS Modules**: For styling components with scoped styles.

---

## Learning Outcomes

From this project, I learned:
1. How to integrate third-party APIs (like OpenWeather API) into a React application.
2. The benefits of using **JavaScript** for type checking and maintaining code quality.
3. Effective state management using React's `useState` and `useEffect` hooks.
4. Creating a fully responsive layout using modern CSS techniques.

---

## Future Improvements

Here are some potential improvements for future versions of the app:
1. **Add a 7-day weather forecast** to provide extended weather information.
2. Implement **location-based weather updates** using the browser's geolocation API.
3. Improve UI/UX by adding animations or transitions for loading states.
4. Allow users to **save favorite cities** for quick access.
5. Add **dark mode support** for better user accessibility.

---

## Getting Started

To run this project locally, follow these steps:

### Prerequisites
- Node.js installed on your machine.


### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/Trisha-Shukla/React-Projects.git
   cd weatherApp

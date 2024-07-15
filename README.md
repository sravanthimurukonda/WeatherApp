# WeatherApp
## Overview
WeatherApp is a web application that provides real-time weather updates for any city in the world. It utilizes the OpenWeatherMap API to fetch and display current weather information, including temperature, weather conditions, humidity, and more. The application features dynamic backgrounds that change according to the weather, enhancing the user experience.
![image](https://github.com/user-attachments/assets/769c8539-ce52-4149-ade6-80c0b6a756f5)
## Getting Started
### Installation
1. ### Clone the Repository:
git clone <your-repository-url>
cd weather-app
2. ### Open the Project:
Open the project folder in your preferred code editor (e.g., VS Code).
3. ### API Key:
- Sign up on OpenWeatherMap to get your API key.
- Replace the key value in script.js with your API key:
  const weatherApi = {
    key: 'YOUR_API_KEY',
    baseUrl: 'https://api.openweathermap.org/data/2.5/weather'
}
4. ### Run the Application:
Open index.html in your web browser.


## Technologies Used
- HTML: For structuring the content of the web app.
- CSS: For styling the web app.
- JavaScript: For dynamic behavior and API integration.
- OpenWeatherMap API: For fetching weather data.
- Font Awesome: For weather icons.
- SweetAlert: For alert messages.
- Google Fonts: For custom fonts.
- HTML5 Video: For background videos.

## Features
Search Weather by City: Users can enter a city name to get the current weather information.
Dynamic Weather Display: Displays temperature, weather condition, min-max temperature, feels like temperature, humidity, pressure, and wind speed.
Background Video Change: The background video changes based on the current weather condition (e.g., clear sky, clouds, rain).
Error Handling: Shows alerts for empty input and invalid city names using SweetAlert.
Responsive Design: The app adjusts its layout for different screen sizes using media queries.

## Contributing
We welcome contributions to improve this weather app. 

# Weather Forecast App

This repository contains the Weather Forecast App, a Node.js-based project for displaying weather forecasts.

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

This project runs on Node.js. If you haven't installed Node.js on your machine, download and install it from the [Node.js official website](https://nodejs.org/).

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/RainbowPlayer/weather_forecast.git
   ```

2. **Navigate to the project directory**

   ```bash
   cd weather_forecast
   ```

3. **Install NPM packages**

   ```bash
   npm install
   ```

4. **Start the local JSON server** (this will serve as your local database and API)

   ```bash
   npx json-server --watch db.json
   ```

   Note: Ensure the JSON server is running on port 5000 to match the application's API request configuration.

5. **In a new terminal window, start the React project**

   ```bash
   npm start
   ```

The app should now be running on [http://localhost:3000](http://localhost:3000).

Project Link: [https://github.com/RainbowPlayer/weather_forecast](https://github.com/RainbowPlayer/weather_forecast)

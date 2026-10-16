// Asynchronous function to fetch weather data for a given city
async function getWeather(city) {
  try {
    const response = await fetch(
      `https://weather-proxy.freecodecamp.rocks/api/city/${encodeURIComponent(city)}`,
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    // Return undefined so showWeather can handle the error
  }
}

// Asynchronous function to display weather data
async function showWeather(city) {
  const data = await getWeather(city);

  // If getWeather failed (returned undefined), show alert
  if (!data) {
    alert("Something went wrong, please try again later.");
    return;
  }

  // Helper to set text content or 'N/A' if value is undefined/null
  function setText(id, value) {
    const el = document.getElementById(id);
    if (el) {
      el.textContent = value !== undefined && value !== null ? value : "N/A";
    }
  }

  // Weather icon
  const iconEl = document.getElementById("weather-icon");
  if (iconEl) {
    const iconUrl = data.weather && data.weather[0] ? data.weather[0].icon : "";
    iconEl.src = iconUrl || "";
    iconEl.alt =
      data.weather && data.weather[0]
        ? data.weather[0].description
        : "Weather icon";
  }

  // Main temperature
  setText("main-temperature", data.main ? data.main.temp : undefined);
  // Feels like
  setText("feels-like", data.main ? data.main.feels_like : undefined);
  // Humidity
  setText("humidity", data.main ? data.main.humidity : undefined);
  // Wind speed
  setText("wind", data.wind ? data.wind.speed : undefined);
  // Wind gust
  setText("wind-gust", data.wind ? data.wind.gust : undefined);
  // Weather main
  setText(
    "weather-main",
    data.weather && data.weather[0] ? data.weather[0].main : undefined,
  );
  // Location
  setText("location", data.name);

  // Show the weather container
  const container = document.getElementById("weather-container");
  if (container) {
    container.classList.add("visible");
  }
}

// Event listener for the button
document.getElementById("get-weather-btn").addEventListener("click", () => {
  const select = document.getElementById("city-select");
  const city = select.value;
  if (city) {
    showWeather(city);
  }
});

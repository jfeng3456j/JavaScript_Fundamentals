class UI {
    constructor() {
        this.location = document.getElementById('w-location');

        this.desc = document.getElementById('w-desc');

        this.string = document.getElementById('w-string');

        this.details = document.getElementById('w-details');

        this.icon = document.getElementById('w-icon');

        this.humidityTemp = document.getElementById('w-humidity');

        this.feelsLike = document.getElementById('w-feels-like');

        this.wind = document.getElementById('w-wind');
    }

    displayWeather(weather_data) {
        this.location.textContent = weather_data.location;
        this.desc.textContent = weather_data.description.description;
        this.string.textContent = `${weather_data.temperature.temp}℉`;
        this.icon.setAttribute('src', `https://openweathermap.org/img/w/${weather_data.description.icon}.png`);

        this.humidityTemp.textContent = `Relative Humidity: ${weather_data.temperature.humidity}℉`;
        this.feelsLike.textContent =
            `Feels Like: ${weather_data.temperature.feels_like}℉`;
        this.wind.textContent = `Wind speed: ${weather_data.wind.speed}`;
    }
}
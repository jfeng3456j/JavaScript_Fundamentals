class Weather {
    constructor(city, state) {
        this.apiKey = 'a95155513d6296df58b7355cfd3efe56';
        this.city = city;
        this.state = state;
    }

    //fetch ewather from api
    async getWeather() {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.state}&appid=${this.apiKey}&units=imperial`);

        const responseData = await response.json();

        return {
            location: responseData.name,
            temperature: responseData.main,
            description: responseData.weather[0],
            wind: responseData.wind
        }
    }

    //Change weather location
    changeLocation(city, state) {
        this.city = city;
        this.state = state;
    }


}
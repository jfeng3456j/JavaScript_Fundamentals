//instantiate objects
const ui = new UI();

const storage = new Storage();

//get store location data
const weatherLocation = storage.getLocationData();

const weather = new Weather(weatherLocation.city, weatherLocation.state);

//get weather on dom load
document.addEventListener('DOMContentLoaded', getWeather)

//add eventlistener to modal button
document.getElementById('w-change-btn').addEventListener('click', (e) => {
    const city = document.getElementById('city').value;
    const state = document.getElementById('state').value;

    //change location
    weather.changeLocation(city, state);

    //set location in local storage
    storage.setLocationData(city, state);

    //get and display weather
    getWeather();

    //close modal
    $('#locModal').modal('hide');
})


function getWeather() {
    weather.getWeather()
        .then(result => {
            ui.displayWeather(result)
        })

        .catch(err => console.log(err));
}
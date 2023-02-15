export let store = {
    cityLocation: "Краснодар",
    countryLocation: "",
    temp: 20,
    feelsLike: 25,
    humidity: 70,
    weatherStatus: "Sunny",
    pressure: 1000,
    windDir: "NNW",
    windSpeed: 3,
    icon: "https://cdn.weatherapi.com/weather/64x64/night/116.png",
    precipication: 0
}  

export async function fetchData(city) {
    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=ca859fbf546341bb9d0123800231002&q=${city}&aqi=no`)
    const data = await response.json();
    const result = await data;


    const {
    current: {
    temp_c: temp, humidity, feelslike_c: feelsLike, wind_dir: windDir, wind_mph: windSpeed, precip_mm: precipication, pressure_mb:pressure,
    condition: {text: weatherStatus, icon}},
    location: {
    name: cityLocation,
    country: countryLocation}} = result
    

    store = {
    ...store,
    temp,
    humidity,
    feelsLike,
    windDir,
    windSpeed,
    weatherStatus,
    cityLocation,
    countryLocation,
    icon,
    precipication,
    pressure
    }

}

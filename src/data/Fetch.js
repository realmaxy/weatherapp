export let store = {
    cityLocation: "",
    countryLocation: "",
    temp: 0,
    feelsLike: 0,
    humidity: 0,
    weatherStatus: "",
    pressure: 0,
    windDir: "",
    windSpeed: 0,
    icon: "",
    precip: 0
}  

export async function fetchData(city) {
    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=ca859fbf546341bb9d0123800231002&q=${city}&aqi=no`)
    const data = await response.json();
    const result = await data;


    const {
    current: {
    temp_c: temp, humidity, feelslike_c: feelsLike, wind_dir: windDir, wind_mph: windSpeed, precip__mm: precip,
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
    precip
    }

}

fetchData("Москва")
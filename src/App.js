import {Route, Routes} from "react-router"
import Home from "./pages/Home/Home.jsx";
import Header from "./UI/Header/Header.jsx";
import { fetchData, store} from "./data/Fetch.js";
import PopupSetCity from "./UI/PopupSetCity/PopupSetCity.jsx";
import { useState } from "react";


function App() {
  const [cityWeather, setCityWeather] = useState(store);
  const [isOpen, showPopup] = useState (true)
  const [trackedCities, setTrackedCities] = useState()


  const setWeather = async(city) => {
    await fetchData(city)
    setCityWeather(store)
    showPopup(false)

    const newItem = {
      cityName: store.cityLocation,
      cityWeather: store
    }

    setTrackedCities(newItem)
  }

    return (
      <>
        <PopupSetCity onSubmit={setWeather} isOpen={isOpen} needBlur={true}/>
        <div className="container">
          <Header />
          <Home cityWeather={cityWeather} trackedCities={trackedCities}/>
        </div>
      </>
    )
}

export default App;

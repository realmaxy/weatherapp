import {Route, Routes} from "react-router"
import Home from "./pages/Home/Home.jsx";
import Header from "./UI/Header/Header.jsx";
import { fetchData, store} from "./data/Fetch.js";
import PopupSetCity from "./UI/PopupSetCity/PopupSetCity.jsx";
import { useRef, useState } from "react";



function App() {
  const [cityWeather, setCityWeather] = useState(store);

  const setWeather = async(id) => {
    await fetchData(id)
    setCityWeather(store)
    console.log(id)
  }

  return (
    <>
      <PopupSetCity onSubmit={setWeather} />
    <div className="container">
      <Header/>
      <Routes>
        <Route path="/" element ={<Home cityWeather={cityWeather}/>}/>
      </Routes>
    </div>
    </>
  );
}

export default App;

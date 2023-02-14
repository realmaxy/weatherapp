import {Route, Routes} from "react-router"
import Home from "./pages/Home/Home.jsx";
import Header from "./UI/Header/Header.jsx";
import { fetchData, store} from "./data/Fetch.js";
import PopupSetCity from "./UI/PopupSetCity/PopupSetCity.jsx";
import { useState } from "react";



function App() {
  const [cityWeather, setCityWeather] = useState(store);
  const [PopupIsOpen, showPopup] = useState (true)

  const setWeather = async(id) => {
    await fetchData(id)
    setCityWeather(store)
    showPopup(false)
  }

  if(PopupIsOpen)
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
  else 
    return (
      <div className="container">
      <Header/>
      <Routes>
        <Route path="/" element ={<Home cityWeather={cityWeather}/>}/>
      </Routes>
    </div>
  );  
}

export default App;

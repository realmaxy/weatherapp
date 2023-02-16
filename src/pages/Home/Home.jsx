import React, { useState } from 'react'
import ThisDay from './components/ThisDay/ThisDay'
import ThisDayInfo from './components/ThisDayInfo/ThisDayInfo'
import TrackedCityList from './components/TrakedCityList/TrackedCityList'
import s from './Home.module.scss'


export default function Home({cityWeather, trackedCities}) {
  
  const [selectedCity, selectCity] = useState(cityWeather)

  const changeCity = (city) => {
    selectCity(city.cityWeather)
  }

  return (
    <div className={s.home}>
      <div className={s.wrapper}>
        <ThisDay {...selectedCity}/>
        <ThisDayInfo {...selectedCity}/>
        <TrackedCityList  {...trackedCities} onSetWeather ={changeCity}/>
      </div>
    </div>
  )
}

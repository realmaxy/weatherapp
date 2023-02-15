import React from 'react'
import ThisDay from './components/ThisDay/ThisDay'
import ThisDayInfo from './components/ThisDayInfo/ThisDayInfo'
import TrackedCityList from './components/TrakedCityList/TrackedCityList'
import s from './Home.module.scss'


export default function Home({cityWeather, trackedCities}) {
  
  return (
    <div className={s.home}>
      <div className={s.wrapper}>
        <ThisDay {...cityWeather}/>
        <ThisDayInfo {...cityWeather}/>
        <TrackedCityList list = {trackedCities}/>
      </div>
    </div>
  )
}

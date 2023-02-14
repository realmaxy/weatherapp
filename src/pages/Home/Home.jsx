import React from 'react'
import ThisDay from './components/ThisDay/ThisDay'
import ThisDayInfo from './components/ThisDayInfo/ThisDayInfo'
import TrackedCitites from './components/TrakedCities/TrackedCitites'
import s from './Home.module.scss'


export default function Home({cityWeather}) {
  return (
    <div className={s.home}>
      <div className={s.wrapper}>
        <ThisDay {...cityWeather}/>
        <ThisDayInfo {...cityWeather}/>
        <TrackedCitites/>
      </div>
    </div>
  )
}

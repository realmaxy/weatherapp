import React from 'react'
import ThisDay from './components/ThisDay/ThisDay'
import ThisDayInfo from './components/ThisDayInfo/ThisDayInfo'
import s from './Home.module.scss'

export default function Home() {
  return (
    <div className={s.home}>
      <ThisDay cityLocation='Краснодар' temp='20' icon='https://cdn.weatherapi.com/weather/64x64/day/113.png' time='21:00'/>
      <ThisDayInfo/>
    </div>
  )
}

import React from 'react'
import WeatherIcon from '../WeatherIcon/WeatherIcon'
import s from './ThisDay.module.scss'

export default function ThisDay({temp, time, cityLocation, icon}) {
  return (
    <div className={s.this_day}>
        <div className={s.temp}>{temp}°</div>
        <div className={s.wrapper}>
            <h1 className={s.title}>Сегодня</h1>
            <WeatherIcon icon={icon}/>
        </div>
        <div className={s.time}>Время: {time}</div>
        <div className={s.location}>Город: {cityLocation}</div>
    </div>
  )
}

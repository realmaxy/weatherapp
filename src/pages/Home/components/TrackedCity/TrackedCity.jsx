import React from 'react'
import GlobalSvgSelector from '../../../../assest/icons/shared/GlobalSvgSelector'
import s from './TrackedCity.module.scss'

export default function TrackedCity({cityName, cityWeather, isMain = false}) {
  const weatherStore = cityWeather

  if(isMain)
  return(
    <div className={s.wrapper}>
        <h1 className={s.city_name}>{cityName}</h1>
    </div>
  )
  else 
  return (
    <div className={s.wrapper}>
        <h1 className={s.city_name}>{cityName}</h1>
        <button >
            <GlobalSvgSelector id='delete-button'/>
        </button>
    </div>
  )
  
}

import React from 'react'
import GlobalSvgSelector from '../../../../assest/icons/shared/GlobalSvgSelector'
import s from './TrackedCity.module.scss'

export default function TrackedCity({cityName, cityWeather, id, isMain = false, removeCity = f => f, setWeather = f => f }) {

  const item = {
    id,
    cityWeather,
    cityName,
  }

  if(isMain)
  return(
    <div className={s.wrapper}>
      <button className={s.set} onClick ={() => setWeather(item)}>
          <h1 className={s.city_name}>{cityName}</h1>
      </button>
    </div>
  )

  else 
  return (
    <div className={s.wrapper}>
      <button className={s.set} onClick ={() => setWeather(item)}>
          <h1 className={s.city_name}>{cityName}</h1>
      </button>
      <button className={s.delete} onClick={() => removeCity(item)}>
          <GlobalSvgSelector id='delete-button'/>
      </button>
    </div>
  )
  
}

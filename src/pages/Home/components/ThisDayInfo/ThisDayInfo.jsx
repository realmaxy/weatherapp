import React from 'react'
import GlobalSvgSelector from '../../../../assest/icons/shared/GlobalSvgSelector'
import WindDirection from '../WindDirection/WIndDirection'
import s from './ThisDayInfo.module.scss'

export default function ThisDayInfo({temp, feelsLike, pressure, precipication, windSpeed, windDir}) {
    windSpeed = windSpeed +' м/c ';
    pressure = (pressure / 1000 * 750.06375).toFixed(1)
  return (
    <div className={s.this_day_info}>
        <div className={s.info_item}>
            <div className={s.icon}><GlobalSvgSelector id='temp'/></div>
            <div className={s.text}>Температура</div>
            <div className={s.info}>{temp}° - ощущается как {feelsLike}°</div>
        </div>
        <div className={s.info_item}>
            <div className={s.icon}><GlobalSvgSelector id='pressure'/></div>
            <div className={s.text}>Давление</div>
            <div className={s.info}>{pressure} мм ртутного столба</div>
        </div>
        <div className={s.info_item}>
            <div className={s.icon}><GlobalSvgSelector id='precipitation'/></div>
            <div className={s.text}>Осадки</div>
            <div className={s.info}>{precipication} мм</div>
        </div>
        <div className={s.info_item}>
            <div className={s.icon}><GlobalSvgSelector id='wind'/></div>
            <div className={s.text}>Ветер</div>
            <div className={s.info}>
                {windSpeed}
                <WindDirection windDir={windDir} style= {{padding: '10px'}}/>
            </div>
        </div>
    </div>
  )
}

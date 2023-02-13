import React from 'react'
import GlobalSvgSelector from '../../../../assest/icons/shared/GlobalSvgSelector'
import s from './ThisDayInfo.module.scss'

export default function ThisDayInfo({temp, feelsLike, pressure, precipitation, windSpeed, windDir}) {
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
            <div className={s.info}>{precipitation}</div>
        </div>
        <div className={s.info_item}>
            <div className={s.icon}><GlobalSvgSelector id='wind'/></div>
            <div className={s.text}>Ветер</div>
            <div className={s.info}>{windSpeed} м/c {windDir}</div>
        </div>
    </div>
  )
}

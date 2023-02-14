import React from 'react'
import GlobalSvgSelector from '../../../../assest/icons/shared/GlobalSvgSelector'
import s from './TrackedCity.module.scss'

export default function TrackedCity({cityName}) {
  return (
    <div className={s.wrapper}>
        <h1 className={s.city_name}>{cityName}</h1>
        <button >
            <GlobalSvgSelector id='delete-button'/>
        </button>
    </div>
  )
}

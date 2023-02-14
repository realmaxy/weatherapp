import React from 'react'
import TrackedCity from '../TrackedCity/TrackedCity'
import s from './TrackedCityList.module.scss'

export default function TrackedCityList({list}) {
  return (
    <div className={s.wrapper}>
        <h1 className={s.title}>Отслеживаемые города</h1>
    </div>
  )
}

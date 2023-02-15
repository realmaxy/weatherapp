import React, { useState } from 'react'
import { fetchData, store } from '../../../../data/Fetch'
import AddTrackedCity from '../AddTrackedCity/AddTrackedCity'
import TrackedCity from '../TrackedCity/TrackedCity'
import s from './TrackedCityList.module.scss'

export default function TrackedCityList(props) {

  const [cityList, setCityList] = useState([])
  const [isOpen, setOpen] = useState(false)

  const showPopUp = () => {
      setOpen(true)
  }

  const addCity = async(city) => {
    await fetchData(city)
    setOpen(false)

    const cityItem = {
      cityName: city,
      cityWeather: store
    }

    setCityList(prevList => [...prevList, cityItem])
    console.log(cityList);
  }

  return (
    <div className={s.wrapper}>
      <h1 className={s.title}>Отслеживаемые города</h1>
      <div className={s.list__wrapper}>
        <TrackedCity {...props.list[0]} isMain={true}/>
        {cityList.map((item, n) => <TrackedCity key={n} cityName={item.cityName} cityWeather={item.cityWeather} />)}
      </div>
      <AddTrackedCity addCity={addCity} showPopUp={showPopUp} isOpen = {isOpen}/>
    </div>
  )
}

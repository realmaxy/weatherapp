import React, { useState } from 'react'
import { fetchData, store } from '../../../../data/Fetch'
import AddTrackedCity from '../AddTrackedCity/AddTrackedCity'
import TrackedCity from '../TrackedCity/TrackedCity'
import s from './TrackedCityList.module.scss'

export default function TrackedCityList({cityName, cityWeather, onSetWeather = f => f}) {


  const [cityList, setCityList] = useState([])
  const [isOpen, setOpen] = useState(false)

  const showPopUp = () => {
      setOpen(true)
  }

  const addCity = async(city) => {
    await fetchData(city)
    setOpen(false)

    const cityItem = {
      id: store.cityLocation,
      cityName: store.cityLocation,
      cityWeather: store
    }
    
    setCityList(prevList => [...prevList, cityItem])
  }

  const removeCity = (item) => {
    setCityList(cityList.filter(i => i.id !== item.id))
  }

  return (
    <div className={s.wrapper}>
      <h1 className={s.title}>Отслеживаемые города</h1>
      <div className={s.list__wrapper}>
        <TrackedCity cityName={cityName} cityWeather={cityWeather} isMain={true} setWeather={onSetWeather}/>
        {cityList.map((item) => 
        <TrackedCity key={item.id} {...item} removeCity = {removeCity} setWeather={onSetWeather}/>
        )}
      </div>
      <AddTrackedCity addCity={addCity} showPopUp={showPopUp} isOpen = {isOpen} />
    </div>
  )
}

import React, { useState } from 'react'
import GlobalSvgSelector from '../../../../assest/icons/shared/GlobalSvgSelector'
import PopupSetCity from '../../../../UI/PopupSetCity/PopupSetCity'
import s from './AddTrackedCity.module.scss'

export default function AddTrackedCity({addCity = f => f, showPopUp = f => f, isOpen}) {

  return (
    <div className={s.wrapper}>
        <PopupSetCity isOpen={isOpen} needBlur ={false} onSubmit ={addCity}/>
        <button  onClick={showPopUp} className= {s.add_button}>
            <h1 className={s.title}>Добавить город</h1>
            <div>
                <GlobalSvgSelector id='add-button' />
            </div>  
        </button> 
    </div>
  )
}

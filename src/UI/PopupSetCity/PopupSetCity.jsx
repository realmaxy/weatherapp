import { useState } from 'react'
import s from './PopupSetCity.module.scss'


export default function PopupSetCity() {
    
  return (
    <>
    <div className={s.blur}/>
    <div className={s.popup}>
        <form className={s.form} >
            <h1 className={s.title}>Введите свой город</h1>
            <input type='text' className={s.input} />
            <button className={s.button}>Выбрать</button>
        </form>
    </div>
    </>
  )
}

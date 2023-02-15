import { useState } from 'react'
import s from './PopupSetCity.module.scss'


 const PopupSetCity = ({onSubmit = f => f, isOpen, needBlur}) => {

  const submit = e => {
    e.preventDefault()
  }

  const [inputValue, setInputValue] = useState('')

  if(isOpen){
    if(needBlur)
      return (
        <>
        <div className={s.blur}/>
        <div className={s.popup}>
            <form className={s.form} onSubmit={submit}>
                <h1 className={s.title}>Введите свой город</h1>
                <input 
                value={inputValue}
                type='text' 
                className={s.input} 
                onChange = {e => setInputValue(e.target.value) }
                />
                <button className={s.button} onClick ={() => onSubmit(inputValue)}>Выбрать</button>
            </form>
        </div>
        </>
      )
    else 
        return (
          <div className={s.popup}>
            <form className={s.form} onSubmit={submit}>
                <h1 className={s.title}>Введите свой город</h1>
                <input 
                value={inputValue}
                type='text' 
                className={s.input} 
                onChange = {e => setInputValue(e.target.value) }
                />
                <button className={s.button} onClick ={() => onSubmit(inputValue)}>Выбрать</button>
            </form>
        </div>
        )
  }
  else
  return(<div className={s.none}/>)
}

export default PopupSetCity

import { useRef} from 'react'
import s from './PopupSetCity.module.scss'


 const PopupSetCity = ({onSubmit = f => f}) => {

  const submit = e => {
    e.preventDefault()
  }

  const inputRef = useRef()
  return (
    <>
    <div className={s.blur}/>
    <div className={s.popup}>
        <form className={s.form} onSubmit={submit}>
            <h1 className={s.title}>Введите свой город</h1>
            <input ref = {inputRef} type='text' className={s.input} />
            <button className={s.button} onClick={() => onSubmit(inputRef.current.value)}>Выбрать</button>
        </form>
    </div>
    </>
  )
}

export default PopupSetCity

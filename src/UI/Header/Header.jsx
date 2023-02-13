import React from 'react'
import Select from 'react-select'
import GlobalSvgSelector from '../../assest/icons/shared/GlobalSvgSelector'
import s from './Header.module.scss'

export default function Header() {

    const options = [
        { value: 'chocolate', label: 'Москва' },
        { value: 'strawberry', label: 'Санкт-Петербург' },
        { value: 'vanilla', label: 'Краснодар' }
    ]

    const colourStyles = {
        control: styles => ({
            ...styles,
            backgroundColor: 'rgba(71, 147, 255, 0.2);',
            borderRadius: '10px;',
            width: '194px', 
            height: '37px',

        })
    }
  return (
    <header className={s.header}>
        <div className={s.wrapper}>
            <div className={s.logo}>
                <GlobalSvgSelector id='header-logo'/>
            </div>
            <div className={s.title}>My Weather</div>
        </div>
    </header>
  )
}

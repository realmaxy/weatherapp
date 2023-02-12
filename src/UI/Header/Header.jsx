import React from 'react'
import Select from 'react-select'
import GlobalSvgSelector from '../../assest/icons/shared/GlobalSvgSelector'
import s from './Header.module.scss'

export default function Header() {

    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
    ]
  return (
    <header className={s.header}>
        <div className={s.wrapper}>
            <div className={s.logo}>
                <GlobalSvgSelector id='header-logo'/>
            </div>
            <div className={s.title}>My Weather</div>
        </div>
        <div className={s.wrapper}>
            <div className={s.change_theme}>
                <GlobalSvgSelector id='change-theme'/>
            </div>
            <Select options={options} className={s.select} />
        </div>
    </header>
  )
}

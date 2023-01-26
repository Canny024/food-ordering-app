import React from 'react'
import classes from "./Header.module.css"
import mealsImage from "../../Assets/mealsImage.webp"
import HeaderCartButton from './HeaderCartButton'

export default function Header(props) {
  return (
    <>
      <header className={classes.header}>
        <h1>Meals</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="preparation" />
      </div>
    </>
  )
}

import { NavLink } from "react-router-dom"
import style from "../Navigation/Navigation.module.css"
import clsx from "clsx"


export default function Navigation() {
    return (
            <nav className={style.header} >
                <NavLink className={({ isActive }) => {
                return clsx(style.headerText, isActive && style.active)
                }} to="/">Home</NavLink>
                <NavLink className={({ isActive }) => {
                return clsx(style.headerText, isActive && style.active)
                }} to="/movies" >Movies</NavLink>
                <NavLink className={({ isActive }) => {
                return clsx(style.headerText, isActive && style.active)
                }} to="/search/movie" >Search</NavLink>

            </nav>
    )
}
import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../../css/Home.module.css'
const HomeNav = () => {
    return (
        <div className={styles.Nav}>
        <Link to="/">logo</Link>
            <Link to="/">logo</Link>
            <Link to="/">logo</Link>
            <Link to="/">logo</Link>
            <Link to="/">logo</Link>
        </div>
    )
}

export default HomeNav

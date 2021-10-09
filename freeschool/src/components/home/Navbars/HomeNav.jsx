import { Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../../css/Home.module.css'


const HomeNav = () => {
    
    return (
        <div className={styles.navContainer}>
        <div className={styles.nav}>
        <div className={styles.logo}>
        <Link to="/"><h1>ele School</h1></Link>
        </div>

            <div className={styles.links}>
            <Link to="/">Live Sessions</Link>
            <Link to="/">Tutors list</Link>
            <Link to="/">Contact Us</Link>
            <Link to="/studentsignin"><Button variant="outlined" size="small" color="primary" >Sign in</Button></Link>
            </div>
        </div>
        </div>
    )
}

export default HomeNav

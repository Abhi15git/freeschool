import { Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../../css/Home.module.css'


const TutorNav = () => {
    return (
        <div className={styles.tutorNavContainer}>
        <div className={styles.nav}>
        <div className={styles.logo}>
        <Link to="/">ele School</Link>
        </div>

            <div className={styles.links}>
            <Link to="/">Live Sessions</Link>
            <Link to="/">Create Session</Link>
            <Link to="/">Contact Us</Link>
            <Link to="/">Profile</Link>
            <Link to="/signin"><Button variant="outlined" size="small" color="inherit">Log out</Button></Link>
            </div>
        </div>
        </div>
    )
}

export default TutorNav

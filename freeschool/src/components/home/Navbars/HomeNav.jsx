import { Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../../css/Home.module.css'


const HomeNav = () => {
    
    return (
        <div className={styles.navContainer}>
        <div className={styles.nav}>
        <div className={styles.logo}>
        <Link to="/"><div className={styles.logo}>
              <span>free</span>
              <span>S</span>
              <span>chool</span>
            </div></Link>
        </div>

            <div className={styles.links}>
            <Link to="/liveclasses">Live Classes</Link>
            <Link to="/tutorslist">Tutors list</Link>
            <Link to="/">Contact Us</Link>
            <Link to="/studentsignin"><Button variant="outlined" size="small" color="primary" >Sign in</Button></Link>
            </div>
        </div>
        </div>
    )
}

export default HomeNav

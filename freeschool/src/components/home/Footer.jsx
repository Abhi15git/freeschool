import React from 'react'
import styles from '../studentPage/student.module.css'

const Footer = () => {
    return (
        <div className={styles.footer}>
        <div>
            <div>
                <div className={styles.logo}>
                <p>free</p>
                <p>S</p>
                <p>chool</p>
                </div>
                <p>
                    Free school creates multiple ways to learn with no cost and it shows the passion of teaching and learning. 
                </p>
            </div>
            <div>
                <h3>About</h3>
                <p>About our teachers</p>
                <p>Our vision</p>
            </div>
            <div>
                <h3>Contact us</h3>
                <p>LinkedIn</p>
                <p>Facebook</p>
            </div>
        </div>
    </div>
    )
}

export default Footer

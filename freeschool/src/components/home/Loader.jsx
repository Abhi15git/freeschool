import React from 'react'
import Spinner from 'react-spinkit'
import styles from '../css/Home.module.css'

const Loader = () => {
    console.log('loading////....')
    return (
        <div className={styles.loader}>
            <Spinner name="ball-pulse-sync" />

        </div>
    )
}

export default Loader

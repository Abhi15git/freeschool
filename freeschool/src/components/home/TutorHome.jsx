import React from 'react'
import styles from '../css/Lecture.module.css'

const TutorHome = () => {
    let arr = [
        {
            name:'teacher1',
            class:'6th',
            subject:'maths',
            time:'9:30 pm',
            link:'this is a link'
        },
        {
            name:'teacher2',
            class:'8th',
            subject:'science',
            time:'9:00 pm',
            link:'this is a link'
        }
    ]
    return (
        arr.map(data=>{

            return <div className={styles.classDetails}>
            <div>
                <p>Teacher name</p>
                <h4>{data.name}</h4>
            </div>
            <div>
                <p>Class</p>
                <h4>{data.class} class</h4>
            </div>
            <div>
                <p>Subject</p>
                <h4>{data.subject}</h4>
            </div>
            <div>
                <p>Time</p>
                <h4>{data.time}</h4>
            </div>
            <button>Attend live</button>
        </div>
        })
    
    )
}

export default TutorHome

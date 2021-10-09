import styles from './student.module.css'

export const Student = () => {
    return (
        <div>
            {/* <div className={styles.nav}>
                <div className={styles.logo}>
                    <p>free</p>
                <p>S</p>
                <p>chool</p>
                </div>
            </div> */}
            <div className={styles.filters}>
                <div>
                    <p>Refined Search</p>
                    <div>
                        <p>Class</p>
                        <select name="class" id="">
                            <option value="6">Class 6</option>
                            <option value="7">Class 7</option>
                            <option value="8">Class 8</option>
                            <option value="9">Class 9</option>
                            <option value="10">Class 10</option>
                            <option value="11">Class 11</option>
                            <option value="12">Class 12</option>
                    </select>
                    </div>
                    <div>
                        <p>Syllabus</p>
                        <select name="class" id="">
                            <option value="cbse">CBSE</option>
                            <option value="icse">ICSE</option>
                    </select>
                    </div>
                    <div>
                        <p>Subject</p>
                        <select name="class" id="">
                            <option value="maths">Maths</option>
                            <option value="hindi">Hindi</option>
                            <option value="science">Science</option>
                            <option value="social">Social</option>
                    </select>
                    </div>
                </div>
                <button>Explore sessions</button>
            </div>
            <div className={styles.classesList}>
                <h2>Today's Live sessions</h2>
                <ClassDetails />
                <ClassDetails/>
                
            </div>
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
        </div>
    )
}

const ClassDetails = () => {
    return (
        <div className={styles.classDetails}>
            <div>
                <p>Teacher name</p>
                <h4>Abhishek</h4>
            </div>
            <div>
                <p>Class</p>
                <h4>7th standard</h4>
            </div>
            <div>
                <p>Subject</p>
                <h4>Maths</h4>
            </div>
            <div>
                <p>Time</p>
                <h4>3:00 PM</h4>
            </div>
            <button>Attend live</button>
        </div>
    )
}
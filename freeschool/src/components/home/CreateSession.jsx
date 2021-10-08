
import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import styles from '../css/Lecture.module.css'

const CreateSession = () => {

    const [lectureDetail,setLectureDetail] = useState({title:'',class:'',teacher:'',subject:'',time:''})

    const handleLectureDetail = (e)=>{
        const {name,value} = e.target;
        setLectureDetail({...lectureDetail,[name]:value})
    }

    return (
        <div>
            <table className={styles.createClass}>
                <tbody>
                <tr>
                    <th><h3>Topic</h3></th>
                    <td><TextField
                   size="small"
                    id="outlined-basic"
                    label="Topic"
                    variant="outlined"
                    onKeyUp={handleLectureDetail}
                    name="title"
                    required
                    /></td>
                </tr>
                <tr>
                    <th><h3>Class</h3></th>
                    <td> <select name="class" onChange={handleLectureDetail} id="">
                            <option value="">Select</option>
                            <option value="6">Class 6</option>
                            <option value="7">Class 7</option>
                            <option value="8">Class 8</option>
                            <option value="9">Class 9</option>
                            <option value="10">Class 10</option>
                            <option value="11">Class 11</option>
                            <option value="12">Class 12</option>
                    </select>
                    </td>
                </tr>
                <tr>
                    <th><h3>Subject</h3></th>
                    <td>
                    <select name="subject" onChange={handleLectureDetail} id="">
                            <option value="">Select</option>
                            <option value="maths">Maths</option>
                            <option value="hindi">Hindi</option>
                            <option value="science">Science</option>
                            <option value="social">Social</option>
                    </select>
                    </td>
                </tr>
                <tr>
                    <th><h3>Time</h3></th>
                    <td><select name="time" onChange={handleLectureDetail} id="">
                            <option value="">Select</option>
                            <option value="5:00">5:00</option>
                            <option value="6:00">6:00</option>
                            <option value="7:00">7:00</option>
                            <option value="8:00">8:00</option>
                    </select>
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td><Button variant="contained" color="primary">Create</Button></td>
                </tr>
                </tbody>
            </table>
        </div>
    )
}

export default CreateSession

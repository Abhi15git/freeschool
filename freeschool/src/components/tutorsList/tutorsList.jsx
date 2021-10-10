import { useContext, useEffect } from "react";
import { Api } from "../context/ContextApi";
import styles from "./tutor.module.css";
import { useHistory } from "react-router-dom";
import {AvatarGenerator} from "random-avatar-generator"

const generator = new AvatarGenerator();

// const teach = [
//   {
//     url: "https://media.istockphoto.com/photos/smiling-teacher-with-arms-folded-in-front-of-blackboard-picture-id160298542?k=6&m=160298542&s=612x612&w=0&h=509BpJg7XMGLBAainJfTZHirZELJqbyFZgPC51AOyeo=",
//     name: "teach1",
//     class: ["7th standard", "8th standard"],
//     subject: ["maths", "science"],
//     qualification: "B.tech",
//     profession: "Software engineer",
//   },
//   {
//     url: "https://thumbs.dreamstime.com/b/portrait-young-arab-teacher-sitting-workplace-indoors-guy-posing-smiling-looking-camera-near-books-shelf-teaching-career-204097359.jpg",
//     name: "teach2",
//     class: ["10th standard", "9th standard"],
//     subject: ["Hindi", "English"],
//     qualification: "B.Ed",
//     profession: "Teacher",
//   },
//   {
//     url: "https://thumbs.dreamstime.com/z/confident-male-teacher-pen-binder-sitting-portrait-mature-desk-classroom-36709193.jpg",
//     name: "teach3",
//     class: ["6th standard", "7th standard", "8th standard"],
//     subject: ["Maths"],
//     qualification: "M.tech",
//     profession: "Assistant Professor",
//   },
// ];

export const TutorsList = () => {
  const { handleGetTeachers, setTeachers, teachers, user } = useContext(Api);

  console.log(user, "user");
  useEffect(() => {
    if (!teachers.length) handleGetTeachers(setTeachers);
  }, []);

  return (
    <div>
      {/* <div className={styles.nav}>
                <div className={styles.logo}>
                    <p>free</p>
                <p>S</p>
                <p>chool</p>
                </div>
            </div> */}
      <div className={styles.tutorList}>
        <h2>Our Teachers</h2>
        <p>"we have wonderfull teachers who work for a good purpose and believes in our vision."</p>
        {teachers.map((ele,i) => {
          return <TutorDetails ele={ele} i={i} />;
        })}
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
              Free school creates multiple ways to learn with no cost and it shows the passion of
              teaching and learning.
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
  );
};

const TutorDetails = ({ ele ,i}) => {
  const { user } = useContext(Api);
  const history = useHistory();
  return (
    <div className={styles.tutorDetails}>
      <div>
        <img src={generator.generateRandomAvatar(ele.name)} alt="noImage" />
      </div>
      <div>
        <p>Teacher name</p>
        <h4>{ele.name}</h4>
      </div>
      <div>
        <p>Subject</p>

        <h4>{ele.subject}</h4>
      </div>

      {/* <div>
                <p>qualification</p>
                <h4>{ele.qualification}</h4>
                <h4>{ele.profession}</h4>
            </div> */}
      <div>
        <button>Contact</button>
        <button
          onClick={() => {
            if (user?._id) {
              history.push("/chatroom");
            } else {
              alert("Please Login first");
            }
          }}
        >
          message
        </button>
      </div>
    </div>
  );
};

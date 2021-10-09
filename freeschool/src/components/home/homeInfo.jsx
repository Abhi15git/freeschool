import styles from "./homeInfo.module.css";

const HomeInfo = () => {
  return (
    <>
      <div className={styles.homeInfo}>
        <div>
          <h1>Want to join our helping hands ?</h1>
          <p>Here is what you can do and can beacome a part to educate India...</p>
        </div>
        <div>
          <div>
            <p>Let's make it possible<br/> with everyone's contribution..</p>
          <button>Donate Now</button>
          </div>
        </div>
        <div className={styles.aboutDiv1}>
          <div>
            <h2>Why learn on our FreeSchool ?</h2>
            <p>
              Free school is live and interactive teaching online. We make
              education possible for all children to improve pupil attainment by
              providing flexible, free additional teaching and learning.
            </p>
            <p>
              Our teachers deliver lessons live in our safeguarded online
              classroom - we try to improve students knowledge from Grade 3 to
              Grade 12 CBSE and ICSE (core subjects like English, Math and
              Science along with the supplementary subjects like Social Science,
              etc)
            </p>
          </div>
          <div>
            <img
              src="https://blog.wiziq.com/wp-content/uploads/2018/03/become-online-teacher.jpg"
              alt=""
            />
          </div>
        </div>
        <div className={styles.aboutDiv2}>
          <div>
            <img
              src="https://th.bing.com/th/id/R.ca0c6d1aad2919592b7aff0b7a6d82f7?rik=ZNKtQYXPctRKtA&riu=http%3a%2f%2fwww.cadcamperformance.com%2fwp-content%2fuploads%2f2021%2f02%2fTeaching-Strategies-and-Resources-for-Online-Teaching.jpg&ehk=LXEh59SGFaDPLcaeIgKxQC%2fmpdL4yztlpar8FC%2fjn%2bw%3d&risl=&pid=ImgRaw&r=0"
              alt=""
            />
          </div>
          <div>
            <h2>Learn from anywhere in India.</h2>
            <p>
              Every Child Has The Right To Learn but due to lack of resources
              ,they aren't able to get enough guidence to study and improve
              their knowledge. so, we introuduce online teaching to everywhere
              and help those who needs to learn.{" "}
            </p>
            <p>
              Here the students can interact and communicate by voice
              (microphone on PC), live chat and using an interactive whiteboard.{" "}
            </p>
          </div>
        </div>
        <div className={styles.aboutDiv1}>
          <div>
            <h2>Teachers with passion and knowledge.</h2>
            <p>
              who is teaching here? we found many people who are qualified and
              wants to teach to show their passion even they teach for free. so
              by their help we want to educate india in a large scale including
              all rural places.{" "}
            </p>
            <p>
              These people are currently working professionals but wants to give
              some for a good purpose because they believe in our vision and
              wants to support to bring up the literacy.
            </p>
          </div>
          <div>
            <img
              src="https://cdn.elearningindustry.com/wp-content/uploads/2020/05/virtual-teaching-how-to-crush-it.jpg"
              alt=""
            />
          </div>
        </div>
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
              Free school creates multiple ways to learn with no cost and it
              shows the passion of teaching and learning.
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
    </>
  );
};

export { HomeInfo };

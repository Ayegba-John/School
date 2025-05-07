import styles from "./Form.module.css";

const form = () => {
  return (
    <div>
      <div className={styles.main}>
        <p className={styles.ready}>
          Ready to shape your <br />
          feature?
        </p>
        <div className={styles.form}>
          <div>
            <p className={styles.dis}>
              Discover our Master of Science Degree in Software Engineering
            </p>
            <p>Discover how to reach your professional goals</p>
            <p>
              Access the full program of our Master of Science Degree in
              Software Engineering
            </p>
            <p>Explore our methodology and the technologies we teach</p>
            <button className={styles.btn}>Sumit</button>
          </div>
          <div>
            <img className={styles.guys} src="guys.jpg" alt="2 guys" />
          </div>
        </div>
        <div className={styles.white_top}>
          <img className={styles.white_logo} src="white-logo.png" alt="logo" />
          <div className={styles.white}>
            <p>Master's Degree in Software Engineering</p>
            <button className={styles.btn}>support@gomycode.co</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default form;

import styles from "./Form.module.css";

const form = () => {
  return (
    <div>
      <div className={styles.main}>
        <p>Ready to shape your feature </p>
        <div className={styles.form}>
          <div>
            <p className={styles.dis}>
              Discover our Master of Science Degree in Software Engineering
            </p>
          </div>
          <div>
            <img className={styles.guys} src="guys.jpg" alt="2 guys" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default form;

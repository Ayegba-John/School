import styles from "./Learn.module.css";

const learn = () => {
  return (
    <div>
      <div className={styles.main}>
        <div className={styles.left}>
          <div>
            <img className={styles.icon} src="groupe-r.svg" alt="icon" />
          </div>

          <h2 className={styles.tags}>
            Learn with highly <br /> qualified instructors
          </h2>
          <p>
            In addition to being experts in their fields, they are mentors at
            heart and focus on each student’s needs.
          </p>
        </div>
        <div className={styles.right}>
          <div className={styles.right_up}>
            <img
              className={styles.image}
              src="Rectangle-57.jpg"
              alt="Group pic"
            />
          </div>
          <div className={styles.right_down}>
            <div>
              <img src="Rectangle-59-1.png" alt="Group" />
            </div>
            <div>
              <img src="Rectangle-60-1.png" alt="Group" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default learn;

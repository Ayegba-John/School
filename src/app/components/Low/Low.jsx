import styles from "./Low.module.css";
const low = () => {
  return (
    <div>
      <div className={styles.Container}>
        <div>
          <img src="Group-166.svg" alt="Group" />
          <p>
            English proficiency of at least B2 level Demonstrated by a
            certificate or proof of previous undergraduate study in English
          </p>
        </div>
        <div>
          <img src="Group-up.svg" alt="group" />
          <p>
            Up-to-date computer A computer on which you can freely install tools
            and which has an actively supported and updated operating system
          </p>
        </div>
      </div>
      <div className={styles.Container}>
        <div>
          <p>
            <img src="Group-d.svg" alt="" />
            Dedication of 15-30 focused hours per week Focused hours are:  -
            Working with the computer (not a smartphone)  - Undisrupted working
          </p>
        </div>
        <div>
          <p>
            Bachelor’s degree or license involving technical skills or 5 years
            of work experience + 2-year qualification or Other options available
          </p>
        </div>
      </div>
    </div>
  );
};
export default low;

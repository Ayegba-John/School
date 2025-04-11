import styles from "./Testimony.module.css";
const test = () => {
  return (
    <div>
      <div className={styles.main}>
        <div>
          <h2>Gain access to the GOMYCODE Network</h2>
          <p>
            Join a community of over 50,000 students Get in contact with 100
            partner organizations across 8 countries
          </p>
          <p>Access our online hackerspace and our 40 in-person hackerspaces</p>
        </div>
        <div>
          <img className={styles.picture} src="testimo.jpg" alt="" />
        </div>
      </div>
    </div>
  );
};
export default test;

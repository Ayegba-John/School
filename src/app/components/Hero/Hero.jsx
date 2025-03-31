import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <div>
      <div className={styles.Hero}>
        <div>
          <h1>Boost Your Career with Accredited Master of Science Degree</h1>
        </div>
        <p className={styles.para}>
          Our 100% online Master's programs enable you to obtain internationally
          recognized higher education degrees in tech.
        </p>

        <div className={styles.btn}>
          <div>
            <button className={styles.btn_1}>Discover courses</button>
            <button className={styles.btn_2}>Book a call</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hero;

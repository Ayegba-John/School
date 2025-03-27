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
            <button>Discover courses</button>
            <button>Book a call</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hero;

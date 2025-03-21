import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.Navbar}>
      <div>
        <div className={styles.Navbar_main}>
          <div className={styles.Navbar_right}>
            <img className={styles.pic} src="black-1.png" alt="Logo" />
            <p>Our Master’s programs</p>
          </div>

          <div className={styles.Navbar_left}>
            <button>Contact an advisor</button>
            <p>NG</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;

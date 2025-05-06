import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.Navbar}>
      <div>
        <div className={styles.Navbar_main}>
          <div className={styles.Navbar_left}>
            <img className={styles.pic} src="black-1.png" alt="Logo" />
            <p>Our Master’s programs</p>
          </div>

          <div className={styles.Navbar_right}>
            <button className={styles.btn}>Contact an advisor</button>
            <p className={styles.btn_right}>NG</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;

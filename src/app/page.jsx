import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
    </div>
  );
};
export default Home;

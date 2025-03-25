import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Body from "./components/Body/Body";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Body />
    </div>
  );
};
export default Home;

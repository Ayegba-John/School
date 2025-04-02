import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Body from "./components/Body/Body";
import Low from "./components/Low/Low";
const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Body />
      <Low />
    </div>
  );
};
export default Home;

import React from "react";
import Header from "../../Components/Header/Header";
import Footer from "./../../Components/Footer/Footer";
import FAQ from "../../Components/FAQ/FAQ";
import Rarity from "../../Components/Rarity/Rarity";
import Total from "../../Components/Total/Total";
import Ownnf from "../../Components/Ownnf/Ownnf";
import Team from "../../Components/Team/Team";
import NF from "../../Components/NF/NF";
import Roadmap from "../../Components/Roadmap/Roadmap";
import Whatis from "../../Components/Whatis/Whatis";
import Intro from "../../Components/Intro/Intro";
import "./Home.css";
import Menu from "../../Components/Menu/Menu";
import Progress from "../../Components/Progress/Progress";
const Home = () => {
  return (
    <>
      {/* <Header /> */}

      <Intro />
      <Whatis />
      <Roadmap />
      <Total />

      <NF />
      <Progress />
      <Rarity />
      <Team />
      <FAQ />
      <Ownnf />
      {/* <Footer /> */}
      <Menu />
    </>
  );
};

export default Home;

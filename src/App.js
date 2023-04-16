import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import "./App.css";
import { DataContextProvider } from "./Components/Context/ContextData";
import Progress from "./Components/Progress/Progress";
import Mint from "./Pages/Mint/Mint";
import Header from "./Components/Header/Header";
// import Menu from "./Components/Menu/Menu";
import Footer from "./Components/Footer/Footer";
import { useEffect } from "react";
const App = () => {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.keyCode === 123) {
        // F12 key
        event.preventDefault();
      }
    };
    const handleContextMenu = (event) => {
      event.preventDefault();
    };
    window.addEventListener("contextmenu", handleContextMenu);

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("contextmenu", handleContextMenu);
    };
  }, []);
  return (
    <DataContextProvider>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mint" element={<Mint />} />
        {/* <Route path="/" element={<Progress />} /> */}
      </Routes>
      <Footer />
    </DataContextProvider>
  );
};

export default App;

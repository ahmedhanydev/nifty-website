import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import "./App.css";
import { DataContextProvider } from "./Components/Context/ContextData";
import Progress from "./Components/Progress/Progress";
import Mint from "./Pages/Mint/Mint";
import Header from "./Components/Header/Header";
// import Menu from "./Components/Menu/Menu";
import Footer from "./Components/Footer/Footer";
const App = () => {
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

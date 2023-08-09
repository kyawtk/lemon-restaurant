import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Booking from "./pages/Booking";
import { ReactLenis, useLenis } from "@studio-freight/react-lenis";

function App() {
  return (
    <>
      <ReactLenis root>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/booking" element={<Booking></Booking>}></Route>
        </Routes>{" "}
      </ReactLenis>
    </>
  );
}

export default App;

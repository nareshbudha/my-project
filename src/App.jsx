import "./App.css";
import Home from "./Component/Page/Home";
import { Routes } from "react-router-dom";
import { BrowserRouter, Route } from "react-router-dom";

import BulkSms from "./Component/Page/BulkSms";
import Frequtly from "./Component/Page/Frequtly";
import Navbar from "./Component/Navbar";
import Footer from "./Component/Page/Footer";
import VoiceBroadcast from "./Component/Page/VoiceBroadcast";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/BulkSms" element={<BulkSms />} />
          <Route path="/VoiceBrodcast" element={<VoiceBroadcast />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

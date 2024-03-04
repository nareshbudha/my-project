import "./App.css";
import Home from "./Component/Page/Home";
import { Routes } from "react-router-dom";
import { BrowserRouter, Route } from "react-router-dom";

import BulkSms from "./Component/Page/BulkSms";
import Frequtly from "./Component/Page/Frequtly";
import Navbar from "./Component/Navbar";
import Footer from "./Component/Page/Footer";
import VoiceBroadcast from "./Component/Page/VoiceBroadcast";
import WhatAppBusiness from "./Component/Page/WhatAppBusiness";
import Videocall from "./Component/Page/Videocall";
import Pricing from "./Component/Page/Pricing";

function App() {
  return (
    <div className="font-Roboto">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/BulkSms" element={<BulkSms />} />
          <Route path="/VoiceBrodcast" element={<VoiceBroadcast />} />
          <Route path="/WhatAppBusiness" element={<WhatAppBusiness />} />
          <Route path="/Videocall" element={<Videocall />} />
          <Route path="/Price" element={<Pricing />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

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
import About from "./Component/Page/About";
import ContactUs from "./Component/Page/ContactUs";
import SpellBulkSMSCart from "./Component/Page/SpellBulkSMSCart";
import Cart from "./Component/Page/Cart";
import Cartwhat from "./Component/Page/Cartwhat";
import ThnakCarts from "./Component/Page/ThnakCarts";
import SignUp from "./Component/Page/SignUp";
import Login from "./Component/Page/Login";

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
          <Route path="/About" element={<About />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/spellbulk" element={<SpellBulkSMSCart />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/carts" element={<Cartwhat />} />
          <Route path="/thank" element={<ThnakCarts />} />
          <Route path="/sign" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Routes>

        {/* <Footer /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;

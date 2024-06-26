import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./Component/Page/Home";
import { Routes } from "react-router-dom";
import { BrowserRouter, Route } from "react-router-dom";
import BulkSms from "./Component/Page/BulkSms";
import Navbar from "./Component/Navbar";
import Footer from "./Component/Page/Footer";
import WhatAppBusiness from "./Component/Page/WhatAppBusiness";
import Videocall from "./Component/Page/Videocall";
import Pricing from "./Component/Page/Pricing";
import About from "./Component/Page/About";
import ContactUs from "./Component/Page/ContactUs";
import SpellBulkSMSCart from "./Component/Page/SpellBulkSMSCart";
import Purchasecomplete from "./Component/Page/Purchasecomplete";
import SignUp from "./Component/Page/SignUp";
import Login from "./Component/Page/Login";
import VoiceBroadcast from "./Component/Page/VoiceBroadcast";
import Products from "./Component/Products";
import Frequtly from "./Component/Page/Frequtly";
import SliderComp from "./Component/Page/SliderComp";
import BulkSMSCart from "./Component/Page/BulkSMSCart";
import WhatsAppCart from "./Component/Page/WhatsAppCart";
import VideoCart from "./Component/Page/VideoCart";

function App() {
  return (
    <div className="font-Roboto">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/BulkSms" element={<BulkSms />} />
          <Route path="/VoiceBroadcast" element={<VoiceBroadcast />} />
          <Route path="/WhatAppBusiness" element={<WhatAppBusiness />} />
          <Route path="/Videocall" element={<Videocall />} />
          <Route path="/Price" element={<Pricing />} />
          <Route path="/About" element={<About />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/spellbulk" element={<SpellBulkSMSCart />} />
          <Route path="/Bulksmscart" element={<BulkSMSCart />} />
          <Route path="/WhatsAppCart" element={<WhatsAppCart/>} />
          <Route path="/Purchasecomplete" element={<Purchasecomplete />} />
          <Route path="/sign" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/pro" element={<Products />} />
          <Route path="/frequ" element={<Frequtly />} />
          <Route path="/slider" element={<SliderComp />} />
          
       
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

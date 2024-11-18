import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Header from './components/Header';
// import {Footer,Fdrf} from './components/Footer';

// import Event from './components/event';
// import Condition from './components/condition';
// import State from "./components/state";
import reportWebVitals from "./reportWebVitals";

import Main from "./pages/Main";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Nopage from "./pages/Nopage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <Header image={"https://images.pexels.com/photos/11404855/pexels-photo-11404855.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}/>
   <Header image={"https://images.pexels.com/photos/19642492/pexels-photo-19642492/free-photo-of-pyramids-on-a-desert.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"}/>
   <Header image={"https://images.pexels.com/photos/3721472/pexels-photo-3721472.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}/>
   <Header/>
   <Header/>
   <Header/>
   <Header/>
   <Header/>

   <Footer/>
   <Fdrf/> */}
    {/* <State /> */}
    {/* <Event/> */}

    {/* <Condition goal={true}/> */}

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact/>} />
          <Route path="login" element={<Login/>} />
          <Route path="*" element={<Nopage/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

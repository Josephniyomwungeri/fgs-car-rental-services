import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./Home";
import Footer from './Footer';
import AuthForm from "./AuthForm";
import 'bootstrap/dist/css/bootstrap.min.css';
import Contact from "./contact";


function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/auth" element={<AuthForm />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
    

    </BrowserRouter>
    <Footer />
    </>
    
  );
}

export default App;

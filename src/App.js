import * as React from "react";
import {Route , Routes} from "react-router-dom";
import About from "./Layouts/About/About";
import Home from './Layouts/Home/Home';
import Services from './Layouts/Services/Services';
import Contact from './Layouts/Contact/Contact';
const App = () =>{
  return (
    <div className="App">
     
     <Routes>

     <Route exact path="/" element={<Home/>} />
     <Route  path="/About" element={<About/>} />
     <Route  path="/Services" element={<Services/>} />
     <Route  path="/Contact" element={<Contact/>} />

     </Routes>
    </div>
  );
}


export default App;
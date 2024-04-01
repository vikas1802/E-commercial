import React from "react";
import "./App.css";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import Header from "./Components/Header";
import Hooks from "./Components/Hooks";
import UseRefHooks from "./Components/UseRefHooks";
import Products from "./Components/Product";
import Data1 from "./Components/Data/Data1";
import 'bootstrap/dist/css/bootstrap.min.css';
import Boot from "./Components/bootcard/Boot";
import Crasual from "./Components/crasual/Crasual";
import ProdcutData3 from "./Components/ProdcutData3";




const App = () => {
    return(
        <div className="">
            <Header/>
            <Crasual/>    
            <div style={{display:"flex", justifyContent:"space-between", padding:"10px 100px"}}>
          <Products/>
          </div>
          <ProdcutData3/>
          <Boot/>
          <div style={{display:"flex", justifyContent:"space-between", padding:"10px"}}>
                    <Hero/>
          </div>
        
           
           <Footer/>

          
           {/* <Hooks/> */}
           {/* <UseRefHooks/> */}
        </div>
        
    )
    
    }
    
export default App;
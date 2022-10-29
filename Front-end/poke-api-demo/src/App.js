import Home from "./components/Home/Home"
import logo from "./assets/logo.png"
import React from "react";
import PokemonDetails from "./components/PokemonDetails/PokemonDetails"
import {  Route, Routes, Link } from 'react-router-dom';
import About from "./components/About/About"
function App() {
    return (


        <div className="app">

            <div >
                <Link to="/">
                    <img href="/" src={logo} alt="logo" className="appLogo" />
                </Link>
                <a href="/about" style={aboutStyle}>About me</a>
            </div>
            
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/pokemon/:pokemonId" element={<PokemonDetails />} exact={false} />
            </Routes>
            
        </div>
       
    );
};
const aboutStyle = {
    display: "inline-block",
    float: "right",
    textDecoration: "none",
    color: "#FF0505",

}

export default App;

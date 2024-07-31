import React, { useContext } from "react";
import {ThemeContext }from "./themeContext";

export default function Navbar(props){

const context = useContext(ThemeContext)
console.log(context)

    return(
<>
<nav className = {`nav ${context.color}-theme`}> 
   <h2>Theme Context</h2>
   <h3>You are currently in {context.color} mode.</h3>
</nav>
</>
)
}
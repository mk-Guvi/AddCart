import React from "react";/**React(is an object importing from the module) "react"(is module) */ 
import ReactDom from "react-dom"
import Conditional from "./components/conditionalRender";
import Counter from "./components/counter";





/** */
const elm=<h1>hello world</h1>

console.log(elm)/**in console you will get a object with certan properties which is the output of JSX expression / React Element(react elemnt is the part of virtual Dom).
whenever any state of this object changes then react will get a new REACT ELEMNT then react will compare this with the previous one and findout the changes and reach it to actual dom and update it accordingly.*/


    ReactDom.render(<><Counter/><Conditional/></>,document.getElementById("root"))//to render the react elemnt in the actual dom ReactDOM is used."elm"[it is the react elemnt which is to be rendered,"document.getElemntbyID("root")"this specifies where this reactelemnt is to be rendered in the realDOM ]
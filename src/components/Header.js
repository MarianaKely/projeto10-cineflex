 
 // General configuration and rendering the header - outset

 
 import React from "react";
 import { Link } from "react-router-dom";
 import styled from "styled-components";
 

 export default function Header (){

    return(


// Creation configuration of header layout- outset 


        <Link to="/">

            <Summit>CINEFLEX</Summit>

          </Link>


// Creation configuration of header layout- end  


    )

 }


 // Header.js page styling - outset


// Styling the top title - outset


 const Summit = styled.div`
    max-width: 614px;
    Width:100%;
    height: 67px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: "Roboto", sans-serif;
    color: #e8833a;
    font-size: 34px;
    margin-left: -8px;
    background-color: #c3cfd9;
    position: fixed;
    top: 0;
    z-index: 2;
    cursor: pointer;
`


// Styling the top title - end


// Header.js page styling - end


// General configuration and rendering the header - end
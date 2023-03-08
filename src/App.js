

import styled from "styled-components";
import axios from "axios";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";


import Header from "./components/Header";



export default function App() {
 
  
  useEffect(() => {
    const promise = axios.get(`${URL}/movies/`);
    promise.then((res) => setMotionpicture(res.data));
  }, []);


  return (
    <>
     
      <BrowserRouter>
          <Header/>
          <Container>
            <Routes>
                
            </Routes>
          </Container>
      </BrowserRouter>
    </>
  );
}

// App.js page styling - outset


const Container = styled.div`
max-width: 614px;
Width:100%;
display: flex;
flex-direction: column;
align-items: center;
font-family: "Roboto", sans-serif;
`

// App.js page styling - end
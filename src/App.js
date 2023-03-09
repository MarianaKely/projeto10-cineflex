
// General configuration page and rendering of cineflex - outset


import React from "react";
import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import styled from "styled-components";



// Import files from js pages - outset


import Header from "./components/Header";
import Pageone from "./pages/Pageone";


// Import files from js pages - end


export default function App() {



// Constants that enable functionalities on the App.js - outset


 
  const [motionpicture, setMotionpicture] = useState(null);
  const [movie, setMovie] = useState(null);
  


// Constants that enable functionalities on the App.js - end


// Configuration that enable functionalities on the App.js - outset
 
  useEffect(() => {

    const promise = axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/movies`);
    promise.then((parameter) => setMotionpicture(parameter.data));

  },

  [])


// Configuration that enable functionalities on the App.js - end


  return (


// Creation configuration of page layout- outset 


    <>
     
      <BrowserRouter>

          <Header/>
          <Container>

            <Routes>

            <Route
                path="/" element={
                  <Pageone motionpicture={motionpicture} chosenmovie={setMovie} />
                }
            />
            
            </Routes>

          </Container>

      </BrowserRouter>

    </>

  )



  // Creation configuration of page layout- end   
  
  
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


// General configuration page and  rendering of cineflex - end
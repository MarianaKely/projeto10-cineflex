
// General configuration and rendering the footer - outset


import styled from "styled-components";
import { useLocation } from "react-router-dom";
import React from "react";


export default function Footer({ down, motionpictureroom }) {


// Constants that enable functionalities on footer - outset  


    const { pathname } = useLocation();

    if (
        down && (pathname.includes("sessoes") || pathname.includes("assentos"))

    ) {


// footer only appears on pages two and three        


// Constants that enable functionalities on footer - end   


      return (


// Creation configuration of footer layout- outset 


        <Baseboard data-test="footer">

          <BaseboardIMG>
            <img src={down.posterURL} alt={`poster for ${down.title}`} />
          </BaseboardIMG>

          <BaseboardText>
            <div>{down.title}</div>
            {motionpictureroom && <div>{`${motionpictureroom.weekday} - ${motionpictureroom.name}`}</div>}
          </BaseboardText>

        </Baseboard>

      )


// Creation configuration of header layout- end  


    }

    return null

  }


 // Footer.js page styling - outset


 // Styling the footer white bar - outset


const Baseboard = styled.div`
  height: 117px;
  max-width: 614px;
  Width:100%;
  position: fixed;
  bottom: 0;
  z-index: 1;
  background-color: #dfe6ed;
  display: flex;
  align-items: center;
  
`

 // Styling the footer white bar - end


 // Styling the footer image - outset


const BaseboardIMG = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  img {
    margin-left: 10px;
    margin-right: 10px;
    width: 48px;
    height: 72px;
    border: 5px solid #ffffff;
  }
`

 // Styling the footer image - end


// Styling the footer text - outset

const BaseboardText = styled.div`
 font-weight: bold;
`

// Styling the footer text - end


 // Footer.js page styling - end


 // General configuration and rendering the footer - end
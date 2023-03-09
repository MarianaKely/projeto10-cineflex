
// General configuration and rendering the page that presents the film collection - outset


import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";


// Import images from assets - outset


import Loading from '../assets/loading.jpg'


// Import images from assets - end



export default function Pageone ({ motionpicture, chosenmovie }) {

  return (

// Pageone.js layout - outset


  <>

    <Containerpageone>

      <Top>Selecione o filme</Top>
      <Motionpicturebox>

        {motionpicture === null ? <img src={Loading}></img> : motionpicture.map((parameter) => (
          
              <Link to={`/sessoes/${parameter.id}`} key={parameter.id} data-test="movie">

                <Moviebox onClick={() => chosenmovie(parameter)}>
                  <img src={parameter.posterURL} alt={parameter.title} />
                </Moviebox>

              </Link>

            ))}

      </Motionpicturebox>

    </Containerpageone>

  </>

  )


// Pageone.js layout - end


}



// Pageone.js styling - outset


const Containerpageone = styled.div`
max-width: 614px;
Width:100%;
hight:100%;
margin-top: 25px;
margin-left: -8px;

`

// Styling the top title - outset


const Top = styled.div`
width: 100%;
height: 110px;
display: flex;
justify-content: center;
align-items: center;
color: #293845;
font-family: "Roboto", sans-serif;
font-size: 34px;
`

// Styling the top title - end


// Styling the box that holds all movies images - outset


const Motionpicturebox = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
align-items: center;
`

// Styling the box that holds all movies images - end


// Styling the box that holds each movie image - outset


const Moviebox = styled.div`
display: flex;
justify-content: center;
align-items: center;
box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
position: relative;
margin-left: 15px;
margin-right: 15px;
margin-bottom: 27px;
> img {
width: 129px;
height: 193px;
cursor: pointer;
}
`

// Styling the box that holds each movie image - end



// Pageone.js styling - end



// General configuration and rendering the page that presents the film collection - end

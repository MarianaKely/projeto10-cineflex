
// General configuration and rendering the page that chooses the session - outset


import React from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import styled from "styled-components";


// Import images from assets - outset


import Loading from '../assets/loading.jpg'


// Import images from assets - end



export default function Pagetwo ({ movietheaterroom }) {


// Constants that enable functionalities on the Pagetwo.js - outset


  const { idFilme } = useParams();
  const [days, setDays] = useState(null);


// Constants that enable functionalities on the Pagetwo.js - end



// Settings for page switching - outset


  useEffect(() => {

    if (idFilme) {

      const promise = axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/movies/${idFilme}/showtimes`);

      

      promise.then((parameter) => setDays(parameter.data.days));

    }

  }, [idFilme]);


// Settings for page switching - end


  return (


// Pagetwo.js layout - outset


    <>

      {days ? (

        <>
          
          <Pagetwocontainer>

          <Top>Selecione o horário</Top>

            {days && days.map((movieday) => (

                <Daybox key={movieday.id} data-test="movie-day">

                  <Daysavailable>
                    {movieday.weekday} - {movieday.date}
                  </Daysavailable>

                  <Weektime>
                    {movieday.showtimes.map((showTime) => (

                      <Link to={`/assentos/${showTime.id}`} key={showTime.id}>

                        <Button data-test="showtime" onClick={() => {
                
                            movietheaterroom({
                              ...showTime,
                              weekday: movieday.weekday,
                              date: movieday.date,
                            })

                          }}

                        >

                          {showTime.name}

                        </Button>

                      </Link>

                    ))}

                  </Weektime>

                </Daybox>

              ))}

          </Pagetwocontainer>

        </>

      ) : 

      (<img src={Loading}></img>)}

    </>

  )


// Pagetwo.js layout - outset


}


// Pagetwo.js styling - outset


const Pagetwocontainer = styled.div`
max-width: 614px;
Width:100%;
  margin-bottom: 117px;
  margin-top: 25px;
 
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



// Styling part of days available - outset


const Daybox = styled.div`
  display: flex;
  font-size: 20px;
  margin-left: 8%;
  margin-bottom: 10%;
  margin-top: 8%;
`

const Daysavailable = styled.div`
  margin-right: 5%;
`


// Styling part of days available - end



// Styling part of times available - outset


const Weektime = styled.div`

  margin-bottom:1%;
`

// Styling part of times available - end


// Styling the button - outset


const Button = styled.button`
  background-color: #e8833a;
  border-width: 0;
  border-radius: 3px;
  min-width: 83px;
  height: 43px;
  font-size: 18px;
  color: #ffffff;
  margin-right: 8px;
  cursor: pointer;
  }
`

// Styling the button - end



// Pagetwo.js styling - end



// General configuration and rendering the page that chooses the session - end






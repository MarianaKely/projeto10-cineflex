
// General configuration and rendering the success page - outset

import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";


export default function Pagefour({ reservationperchair, individualbooking, down, motionpictureroom }) {

  return (


// Creation configuration of Pagefour.js layout- outset  


    <>
     
      <ContainerPageFour>

      <Top>Pedido feito com sucesso!</Top>

        <ClientInfo>

        <div data-test="movie-info">
          <Titles>Filme e sessão</Titles>
          <Information>{down.title}</Information>
          <Information>{`${motionpictureroom.date} - ${motionpictureroom.name}`}</Information>
        </div>

        </ClientInfo>


        <ClientInfo>

        <div data-test="seats-info">
          <Titles>Ingressos</Titles>
          <Information> {individualbooking.map((chair) => (

              <div key={chair}>Assento {chair}</div>

            ))}

          </Information>
        </div>

        </ClientInfo>


        <ClientInfo>

        <div data-test="client-info">
          <Titles>Comprador</Titles>
          <Information>
            <div>Nome: {reservationperchair.user}</div>
            <div>CPF: {reservationperchair.document}</div>
          </Information>
        </div>

        </ClientInfo>

      </ContainerPageFour>

      <Link to="/" data-test="go-home-btn">

        <Button>Voltar pra Home</Button>
        
      </Link>

    </>

  )


// Creation configuration of Pagefour.js layout- end     


}


 // Pagefour.js styling - outset


 const ContainerPageFour = styled.div`
   max-width: 614px;
   Width:100%;
   hight:100%;
   display: flex;
   flex-direction: column;
   padding-left: 25px;
   margin-top: 25px;
   margin-bottom: 50px;
`

// Styling the top title - outset


const Top = styled.div`
   color: #247a6b;
   font-weight: bold;
   font-size: 24px;
   width: 100%;
   height: 110px;
   display: flex;
   justify-content: center;
   align-items: center;
`

// Styling the top title - end


// Styling the box that holds clients informations - outset

const ClientInfo = styled.div `
margin-bottom: 3%;
margin-top:2%;
`

// Styling the box that holds clients informations - end


// Styling titles of purchase information confirmation bar - outset


const Titles = styled.div`
  font-weight: bold;
  font-size: 24px;
`

// Styling titles of purchase information confirmation bar - end


// Styling purchase information confirmation bar - outset


const Information = styled.div`
   font-size: 22px;
`

// Styling purchase information confirmation bar - end


// Styling the button - outset


const Button = styled.button`
  width: 225px;
  background-color: #e8833a;
  border-width: 0;
  border-radius: 3px;
  min-width: 83px;
  height: 43px;
  font-size: 18px;
  color: #ffffff;
  margin-right: 8px;
  cursor: pointer;
`


// Styling the button - end


 // Pagefour.js styling - end


// General configuration and rendering the success page - end
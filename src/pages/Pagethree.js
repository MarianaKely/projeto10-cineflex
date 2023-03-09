
// General configuration and rendering the page that chooses the seats - outset
  

  import React from "react";
  import axios from "axios";
  import { useParams, useNavigate } from "react-router-dom";
  import { useEffect, useState } from "react";
  import styled from "styled-components";
 
 
// Import images from assets - outset


  import Loading from '../assets/loading.jpg'


// Import images from assets - end
  
  
  export default function Pagethree ({ setIndividualBoooking, setReservationperChair }) {


// Constants that enable functionalities on the Pagethree.js - outset


    const { idSessao } = useParams();
    const [seats, setSeats] = useState(null);
    const [chooseChair, setChooseChair] = useState([]);
    const [user, setUser] = useState("");
    const [document, setDocument] = useState("");
    const netxpage = useNavigate();


// Constants that enable functionalities on the Pagethree.js - end  


// Seat choice setting - outset

  
    function yourChair (chair) {

      if (!chair.isAvailable) {

        alert("Esse assento não está disponível")

      }

// prevents the customer from choosing an unavailable chair
// sends a warning alert
      
      let yourChoose = [...chooseChair]

       if (yourChoose.includes(chair)) {

         yourChoose = yourChoose.filter((parameterone) => parameterone !== chair)

       } else {

         yourChoose.push(chair)

       }

       setChooseChair(yourChoose)

    }


// Seat choice setting - end    


// Name and document input setup - outset


    function dataChecker() {

        return chooseChair.length > 0 && document.length === 11 && user.length > 0;

// eleven digit cpf

      }


      function dataAnalysis(parameterthree) {

        let { value } = parameterthree.target
         if (parameterthree.target.name === "name") {

           setUser(value)

         } else if (parameterthree.target.name === "cpf") {

           value = value.replace(/\D/g, "").substring(0, 11)

           setDocument(value);

         }
       }


    function prePurchase() {

      if (dataChecker()) {

        const promise = axios.post(`https://mock-api.driven.com.br/api/v8/cineflex/seats/book-many`, {

          ids: chooseChair.map((parameterone) => parameterone.id),
          user,
          document,

        })

        promise.then((parametertwo) => {

          console.log(parametertwo.data)

          setReservationperChair({

            user,
            document,

          })

          setIndividualBoooking(chooseChair.map((parameterone) => parameterone.name))
          netxpage("/sucesso")

// if the data is correct, forward to the purchase confirmation page          

        })
        promise.catch((err) => alert(err.response.data))

      } else {

        console.log("dados invalidos")

// if the data is wrong, the button is not activated to forward 

      }
    }
  

// Name and document input setup - end  


// Settings for page switching - outset

  
    useEffect(() => {

      if (idSessao) { const promise = axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${idSessao}/seats`)
        
        promise.then((parametertwo) => setSeats(parametertwo.data))

      }
    }, 

    [idSessao]

    )


// Settings for page switching - end    
  
    return (


// Pagethree.js layout - outset     


      <>
      
        <Pagetwocontainer>

        <Top>Selecione o(s) assento(s)</Top>

          {seats === null ? <img src={Loading}></img> : seats.seats.map((chair) => (
            
                <ChairCircle data-test="seat"  available={chair.isAvailable} selected={chooseChair.includes(chair)}
                  onClick={() => yourChair(chair)} key={chair.id} >
                  
                {chair.name}

                </ChairCircle>

              ))}

        </Pagetwocontainer>


        <ChairStatus>

          <div>
            <Status color="#1AAE9E" borderColor="#0E7D71" />
            <span>Selecionado</span>
          </div>

          <div>
            <Status color="#C3CFD9" borderColor="#7B8B99" />
            <span>Disponível</span>
          </div>

          <div>
            <Status color="#FBE192" borderColor="#F7C52B" />
            <span>Indisponível</span>
          </div>
          
        </ChairStatus>


        <InputsContainer>

          <UserInformation>Nome do comprador:</UserInformation>
          <InputConfiguration data-test="client-name" placeholder="Digite seu nome..." value={user} name="name" onChange={dataAnalysis}/>
            
          <UserInformation>CPF do comprador:</UserInformation>
          <InputConfiguration data-test="client-cpf" placeholder="Digite seu CPF..." value={document} name="cpf" onChange={dataAnalysis}/>
        
        </InputsContainer>


        <ButtonTwo isEnabled={dataChecker()} onClick={prePurchase} data-test="book-seat-btn">
          Reservar assento(s)
        </ButtonTwo> 
       
      </>

    )


// Pagethree.js layout - end 


  }


// Pagethree.js styling - outset  


  const Pagetwocontainer = styled.div`
   display: flex;
   flex-wrap: wrap;
   max-width: 350px;
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
   font-size: 24px;
`


// Styling the top title - end


// Styling of each chair -  outset



const ChairCircle = styled.div`
    width: 25px;
    height: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 13px;
    font-size: 11px;
    border: 1px solid ${(props) => props.available ? (props.selected ? "#0E7D71" : "#808F9D") : "#F7C52B"};
    background-color: ${(props) => props.available ? (props.selected ? "#1AAE9E" : "#C3CFD9") : "#FBE192"};
    margin-right: 7px;
    margin-bottom: 18px;
    cursor: ${(props) => (props.available ? "pointer" : "default")};
    
  `


  const ChairStatus = styled.div`
     max-width: 340px;
     width: 100%;
     display: flex;
     justify-content: space-around;
     margin-bottom: 45px;
     div {
       display: flex;
       flex-direction: column;
       align-items: center;
       }
     span {
       margin-top: 5px;
       font-size: 13px;
       }
`



const Status = styled.div`
   width: 25px;
   height: 25px;
   border-radius: 12px;
   border: 1px solid ${(props) => props.borderColor};
   background-color: ${(props) => props.color};
`
// change chair circle color depending on status


// Styling of each chair -  end


// Styling inputs - outset


const InputsContainer = styled.div`
   width: 327px;
   display: flex;
   flex-direction: column;
   justify-content: flex-start;
`
  
const UserInformation = styled.div`
   color: #293845;
   font-size: 18px;
   margin-bottom: 5px;
`

const InputConfiguration = styled.input`
   width: 100%;
   height: 51px;
   font-size: 18px;
   margin-bottom: 5px;
   > ::placeholder {
     font-style: italic;
     color: #d4d4d4;
     }
   border: 1px solid #d4d4d4;
   border-radius: 3px;
`

// Styling inputs - end


// Styling the button - outset

  
const ButtonTwo = styled.button`
   width: 225px;
   height: 43px;
   color: #ffffff;
   font-size: 18px;
   border-width: 0;
   border-radius: 3px;
   background-color: ${(props) => (props.isEnabled ? "#e8833a" : "#fCC66d")};
   margin-top: 50px;
   margin-bottom: 147px;
   margin-right: 8px;
   cursor: ${(props) => (props.isEnabled ? "pointer" : "default")};
`


// Pagethree.js styling - outset  


// Styling the button - end
  

// General configuration and rendering the page that chooses the seats - end
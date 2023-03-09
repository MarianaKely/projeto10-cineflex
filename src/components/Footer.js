import styled from "styled-components";
import { useLocation } from "react-router-dom";
import React from "react";

export default function Footer({ down, motionpictureroom }) {
    const { pathname } = useLocation();
    if (
        down &&
      (pathname.includes("sessoes") || pathname.includes("assentos"))
    ) {
      return (
        <Baseboard data-test="footer">
          <BaseboardIMG>
            <img src={down.posterURL} alt={`poster for ${down.title}`} />
          </BaseboardIMG>
          <BaseboardText>
            <div>{down.title}</div>
            {motionpictureroom && <div>{`${motionpictureroom.weekday} - ${motionpictureroom.name}`}</div>}
          </BaseboardText>
        </Baseboard>
      );
    }
    return null;
  }

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

const BaseboardText = styled.text`
 font-weight: bold;
`
import React, { useState } from "react";
import {FaArrowLeft} from 'react-icons/fa'
import styled from "styled-components";
import SubscriptionsInputs from "./SubscriptionInputs";
import { useNavigate } from "react-router-dom";

export default function SubscriptionsSelectedPlan() {
  const plan = JSON.parse(localStorage.getItem("plan"));
  const { image, id, name, price, perks } = plan;
  const [confirm, setConfirm] = useState(false);
   const navigate = useNavigate();
  
  return (
    <>
      <FaArrowLeft style={{
        "position":"fixed",
        "width": "29px",
        "height": "28px",
        "left": "22px",
        "top": "24px",
        "color": "#FFFFFF",
      }}
      onClick={()=>navigate('../subscriptions')}
      />
      <Title>
        <img src={image} alt="" /> <h1>{name}</h1>
      </Title>
      <Description id={id}>
        <div>
          <h2>Benefícios:</h2>
          <ul>
            {perks.map((perk, i) => (
              <li key={i}>
                {i + 1}. {perk.title}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2>Preço:</h2>
          <h3>R$ {price.replace(".", ",")} cobrados mensalmente </h3>
        </div>
      </Description>
      <SubscriptionsInputs id={id}/>
      
    </>
  );
}

const Title = styled.title`
  width: 100%;
  margin-top: 87px;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    margin-top: 12px;
    font-weight: 700;
    font-size: 32px;
    line-height: 38px;

    color: #ffffff;
  }
`;

const Description = styled.section`
  margin-top: 22px;
  margin-left: 40px;

  h2,
  h3,
  li {
    font-style: normal;
    font-weight: 400;

    color: #ffffff;
  }

  h2 {
    margin-bottom: 10px;
    font-size: 16px;
    line-height: 19px;
  }

  ul {
    margin-bottom: 12px;
  }
  li,
  h3 {
    font-size: 14px;
    line-height: 16px;
  }
`;

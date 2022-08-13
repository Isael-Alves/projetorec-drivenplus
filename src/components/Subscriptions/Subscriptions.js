import React, { useEffect, useState } from "react";
import { AuthContext } from '../common/auth';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

export default function Subscriptions() {
  const { setPlan } = React.useContext(AuthContext);
  const dados = JSON.parse(localStorage.getItem("dados"));
  const { token } = dados;
  const navigate = useNavigate();
  const [plans, setPlans] = useState([]);
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  useEffect(() => {
    const searchPlans = axios.get(
      `https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions/memberships`,
      config
    );

    searchPlans.then((res) => {
      setPlans(res.data);
    });

    searchPlans.catch((err) => {
      const message = err.response.data.message;
      alert(message);
    });
  }, []);

  function selectPlan(id) {
    const dataPlan = axios.get(
      `https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions/memberships/${id}`,
      config
    );

    dataPlan.then((res) => {
      setPlan(res.data);
      window.localStorage.setItem('plan',JSON.stringify(res.data));
      navigate(`/subscriptions/${id}`);
    });

    dataPlan.catch((err) => {
      const message = err.response.data.message;
      alert(message);
    });
  }

  function ListPlans() {
    if (plans.length > 0) {
      return (
        <ul>
          {plans.map((plan, i) => {
            const { id, image, price } = plan;
            return (
              <li
                id={id}
                key={i}
                onClick={() => {
                  selectPlan(id);
                }}
              >
                <img src={image} alt="" />
                <h3>R$ {price.replace(".", ",")}</h3>
              </li>
            );
          })}
        </ul>
      );
    }
    return "";
  }

  return (
    <Container>
      <h1>Escolha seu Plano</h1>
      <ListPlans />
    </Container>
  );
}

const Container = styled.nav`
  width: 100%;
  height: 100vw;
  display: flex;
  align-items: center;
  flex-direction: column;

  h1 {
    margin: 30px 0;
    font-weight: 700;
    font-size: 28px;
    line-height: 32px;

    color: #ffffff;
  }

  li {
    width: 300px;
    height: 200px;
    margin-bottom: 15px;
    padding: 20px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    background-color: #0e0e13;
    border: 3px solid #7e7e7e;
    border-radius: 12px;

    h3 {
      font-weight: 700;
      font-size: 22px;
      line-height: 28px;

      color: #ffffff;
    }
  }
`;

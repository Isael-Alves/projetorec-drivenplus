import styled from "styled-components";
import axios from "axios";
import { useState } from "react";
import ConfirmSubscription from "./ConfirmSubscription";
import { useNavigate } from "react-router-dom";

export default function SubscriptionsInputs({ id }) {
  const dados = JSON.parse(localStorage.getItem("dados"));
  const { token } = dados;
  const [confirmation, setConfirmation] = useState(false);
  const clearForm = {
    membershipId: `${id}`,
    cardName: "",
    cardNumber: "",
    securityNumber: "",
    expirationDate: "",
  };
  const [form, setForm] = useState(clearForm);
  const navigate = useNavigate();

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  function handleForm(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  function buildForm() {
    const { cardName, cardNumber, securityNumber, expirationDate } = form;
    if (
      cardName !== "" &&
      cardNumber !== "" &&
      securityNumber !== "" &&
      expirationDate !== "" &&
      confirmation
    ) {
      const body = form;
      const searchPlans = axios.post(
        `https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions`,
        body,
        config
      );

      searchPlans.then((res) => {
        window.localStorage.setItem("dataUser", JSON.stringify(res.data));
        navigate("../home");
        setForm(clearForm);
      });

      searchPlans.catch((err) => {
        const message = err.response.data.message;
        alert(message);
      });
    }
  }

  return (
    <>
      <Form>
        <input
          type="text"
          name="cardName"
          placeholder="Nome impresso no cartão"
          onChange={handleForm}
          value={form.cardName}
          required
        />
        <input
          type="text"
          name="cardNumber"
          placeholder="Digitos do cartão"
          onChange={handleForm}
          value={form.cardNumber}
          required
        />
        <div>
          <input
            type="text"
            name="securityNumber"
            placeholder="Código de segurança"
            onChange={handleForm}
            value={form.securityNumber}
            required
          />
          <input
            type="month"
            name="expirationDate"
            placeholder="Validade"
            onChange={handleForm}
            value={form.expirationDate}
            required
          />
        </div>
        <Button
          onClick={() => {
            if (confirmation) {
              return "";
            } else {
              return setConfirmation(true);
            }
          }}
        >
          Assinar
        </Button>
      </Form>
      {confirmation ? (
        <ConfirmSubscription
          buildForm={buildForm}
          setConfirmation={setConfirmation}
        />
      ) : (
        ""
      )}
    </>
  );
}

const Form = styled.nav`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;

  input {
    width: 315px;
    height: 68px;
    margin-bottom: 15px;
    padding: 10px;

    font-weight: 400;
    font-size: 14px;
    line-height: 16px;

    color: #7e7e7e;

    background-color: #ffffff;
    border-radius: 8px;
    border: none;
  }

  div {
    display: flex;
    width: 315px;
    justify-content: space-between;

    input {
      width: 152px;
    }
  }
`;

const Button = styled.button`
  width: 310px;
  height: 68px;
  margin-top: 25px;

  font-weight: 700;
  font-size: 14px;
  line-height: 16px;

  color: #ffffff;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #ff4791;
  border-radius: 8px;
  border: none;
`;

import styled from "styled-components";
import { useState } from "react";

export default function SubscriptionsInputs({ id }) {
  const clearForm = {
    membershipId: `${id}`,
    cardName: "",
    cardNumber: "",
    securityNumber: "",
    expirationDate: "",
  };
  const [form, setForm] = useState(clearForm);

  function handleForm(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  function buildForm() {}

  return (
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
      <Button>Assinar</Button>
    </Form>
  );
}

const Form = styled.form`
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

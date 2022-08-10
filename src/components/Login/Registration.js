import axios from "axios";
import styled from "styled-components";
import { ThreeDots } from "react-loader-spinner";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Body, Form } from "../../styles/loginStyle";

function Registration() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const clearForm = {
    email: "",
    name: "",
    cpf: "",
    password: "",
  };
  const [form, setForm] = useState(clearForm);

  function handleForm(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  function sendForm(e) {
    if (!loading) {
      setLoading(true);
      console.log("entrei no form");
      e.preventDefault();
      
      const body = {
        ...form,
      };

      const promise = axios.post(
        `https://mock-api.driven.com.br/api/v4/driven-plus/auth/sign-up`,
        body
      );

      promise.then((res) => {
        console.log("entrei");
        alert("Usuário criado com sucesso!");
        navigate(`../`);
        setForm(clearForm);
        setLoading(false);
      });

      promise.catch((err) => {
        console.log("entrei não");
        console.log(err.response);
        const message = err.response.data.message;
        alert(message);
        setForm(clearForm);
        setLoading(false);
      });
    }
  }

  return (
    <Container>
      <Body>
        <Form onSubmit={sendForm}>
        <input
            type="email"
            name="email"
            placeholder="E-mail"
            onChange={handleForm}
            value={form.email}
            required
          />
          <input
            type="text"
            name="name"
            placeholder="Nome"
            onChange={handleForm}
            value={form.name}
            required
          />
          <input
            type="cpf"
            name="cpf"
            placeholder="CPF"
            onChange={handleForm}
            value={form.image}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Senha"
            onChange={handleForm}
            value={form.password}
            required
          />
          <Button>
            {!loading ? (
              "Cadastrar"
            ) : (
              <ThreeDots color="#FFFFFF" height={20} width={70} />
            )}
          </Button>
        </Form>
        <h5 onClick={() => navigate(`../`)}>Já possuí uma conta? Entre</h5>
      </Body>
    </Container>
  );
}

const Container = styled.form`
  margin-top: 90px;
`;

export default Registration;

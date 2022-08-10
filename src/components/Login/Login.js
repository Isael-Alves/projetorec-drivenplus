import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../common/auth";
import axios from "axios";
import { ThreeDots } from "react-loader-spinner";
import logo from "../../assets/img/Driven_white 1.svg";
import { Button, Body, Form } from "../../styles/loginStyle";

function Login() {
  const {setDados} = React.useContext(AuthContext); 
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handForm(e) {
    if (!loading) {
      setLoading(true);
      e.preventDefault();
      const body = {
        email,
        password,
      };

      const promise = axios.post(
        `https://mock-api.driven.com.br/api/v4/driven-plus/auth/login`,
        body
      );

      promise.then((res) => {
        delete res.data.password
        delete res.data.email
        delete res.data.cpf
        setDados(res.data);
        window.localStorage.setItem('dados',JSON.stringify(res.data));
        setEmail("");
        setPassword("");
        setLoading(false);
        if(res.data.membership !== null){
          navigate('../home');
        }else {
          navigate('../subscriptions');
        }

      });

      promise.catch((err) => {
        const message = err.response.data.message;
        alert(message);
        setEmail("");
        setPassword("");
        setLoading(false);
      });
    }
  }

  return (
    <Body>
      <img src={logo} alt="Logo" />
      <Form onSubmit={handForm}>
        <input
          type="email"
          placeholder="E-mail"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          value={email}
          required
        ></input>
        <input
          type="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          placeholder="Senha"
          value={password}
          required
        ></input>
        <Button>
          {!loading ? (
            "Entrar"
          ) : (
            <ThreeDots color="#FFFFFF" height={20} width={70} />
          )}
        </Button>
      </Form>
      <h5 onClick={() => navigate(`../sign-up`)}>
        Não tem uma conta? Cadastre-se!
      </h5>
    </Body>
  );
}

export default Login;

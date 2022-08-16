import styled from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import user from "../../assets/img/Vector.svg";

export default function Home() {
  const dados = JSON.parse(localStorage.getItem("dataUser"));
  const data = JSON.parse(localStorage.getItem("dados"));
  const { name, token } = data;
  const { image, perks } = dados.membership;
  const navigate = useNavigate();
  const URL = `https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions`;

function cancelPlan(){
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const searchPlans = axios.delete(
    URL,
    config
  );

  searchPlans.then(() => {
    navigate('../subscriptions');
  });

  searchPlans.catch((err) => {
    const message = err.response.data.message;
    alert(message);
  });
}

  return (
    <>
      <Header>
        <img className="LogoDriven" src={image} alt="" />
        <img className="UserCircle" src={user} alt="" />
      </Header>
      <Title>Olá, {name}</Title>
      <BoxButtons>
        <section>
          {perks.map((benefits, i) => {
            const { link, title } = benefits;
            return (
              <div key={i}>
                <a href={link}>{title}</a>
              </div>
            );
          })}
        </section>
        <section>
          <div onClick={()=> navigate('../subscriptions')}>Mudar plano</div>
          <div 
          style={{ backgroundColor: "#FF4747" }}
          onClick={() => cancelPlan()}
          >Cancelar plano</div>
        </section>
      </BoxButtons>
    </>
  );
}

const Title = styled.h1`
  width: 100%;
  margin-top: 100px;
  margin-bottom: 53px;
  text-align: center;

  font-weight: 700;
  font-size: 24px;
  line-height: 28px;

  color: #ffffff;
`;
const Header = styled.header`
  position: fixed;
  width: 100%;
  height: 80px;
  padding: 30px 22px 0 38px;
  top: 0;
  left: 0;

  display: flex;
  justify-content: space-between;

  .LogoDriven {
    width: 90px;
    height: 60px;
  }
  .UserCircle {
    width: 34px;
    height: 34px;
  }
`;

const BoxButtons = styled.nav`
  height: 623px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  section {
    display: flex;
    flex-direction: column;
    align-items: center;

    div {
      width: 299px;
      height: 52px;
      margin-bottom: 8px;

      font-weight: 700;
      font-size: 14px;
      line-height: 16px;

      color: #ffffff;

      display: flex;
      align-items: center;
      justify-content: center;

      background-color: #ff4791;
      border-radius: 8px;
    }
  }
`;

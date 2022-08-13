import styled from "styled-components";
import user from "../../assets/img/Vector.svg";

export default function Home() {
  return (
    <>
      <Header>
        <img
          className="LogoDriven"
          src="https://svgshare.com/i/dSP.svg"
          alt=""
        />
        <img className="UserCircle" src={user} alt="" />
      </Header>
      <Title>Olá, fulano</Title>
      <BoxButtons>
        <section>
          <div>Solicitar brindes</div>
          <div>Materiais bônus de web</div>
        </section>
        <section>
          <div>Mudar plano</div>
          <div style={{ backgroundColor: "#FF4747" }}>Cancelar plano</div>
        </section>
      </BoxButtons>
      ,
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

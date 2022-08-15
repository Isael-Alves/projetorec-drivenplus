import { GrFormClose } from "react-icons/gr";
import styled from "styled-components";

export default function ConfirmSubscription({setConfirmation, buildForm}) {
  const plan = JSON.parse(localStorage.getItem("plan"));
  const { name, price } = plan;

  return (
    <Screen>
      <div onClick={()=>setConfirmation(false)}>
        <GrFormClose />
      </div>
      <nav>
        <h1>Tem certeza que deseja assinar o plano {name} (R$ {price.replace(".", ",")})?</h1>
        <section>
          <div 
          style={{ backgroundColor: "#cecece" }}
          onClick={()=>setConfirmation(false)}
          >Não</div>
          <div style={{ backgroundColor: "#FF4791" }}
          onClick={()=>buildForm()}
          >Sim</div>
        </section>
      </nav>
    </Screen>
  );
}

const Screen = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: rgba(0, 0, 0, 0.7);

  div {
    position: absolute;
    width: 27px;
    height: 24px;
    right: 10px;
    top: 10px;
    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 3px;
    background-color: #ffffff;

    svg {
      width: 20px;
      height: 20px;
    }
  }

  nav {
    width: 248px;
    height: 210px;
    padding: 22px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    border-radius: 12px;
    background-color: #ffffff;

    h1 {
      margin-top: 20px;

      font-weight: 700;
      font-size: 18px;
      line-height: 21px;
      text-align: center;

      color: #000000;
    }

    section {
      width: 215px;
      display: flex;
      justify-content: space-between;

      div {
        position: relative;

        width: 100px;
        height: 52px;

        display: flex;
        justify-content: center;
        align-items: center;

        font-weight: 400;
        font-size: 14px;
        line-height: 16px;

        color: #ffffff;
        border-radius: 8px;
      }
    }
  }
`;

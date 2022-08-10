import styled from "styled-components";

const Body = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    margin-top: 134px;
    width: 300px;
    height: 59px;
  }

  h5 {
    margin-top: 24px;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    text-decoration-line: underline;

    color: #FFFFFF;
  }
`;

const Form = styled.form`
  margin-top: 100px;

  display: flex;
  flex-direction: column;
  align-items: center;

  input {
    width: 300px;
    height: 52px;
    margin-bottom: 16px;
    padding: 11px;

    background: #ffffff;
    border: 1px solid #d5d5d5;
    border-radius: 8px;

    ::placeholder {
      font-weight: 400;
      font-size: 14px;
      line-height: 16px;

      color: #7e7e7e;
    }
  }
`;

const Button = styled.button`
  width: 298px;
  height: 52px;
  margin-top: 8px;

  display: flex;
  align-items: center;
  justify-content: center;

  font-weight: 400;
  font-size: 21px;
  line-height: 26px;

  border: none;
  color: #ffffff;
  background-color: #ff4791;
  border-radius: 8px;
`;

export { Body, Form, Button };

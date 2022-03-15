import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: ${(props) => props.alignSelf || "initial"};
  padding: 0px 25px;
`;

const Form = styled.form`
  width: 380px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;

  margin-bottom: 32px;
`;

const Input = styled.input`
  all: unset;
  box-sizing: border-box;
  font-family: "Raleway", sans-serif;

  width: 100%;

  color: #000;
  background: #ffffff;
  padding: 15px 16px;
  border-radius: 5px;

  ::placeholder {
    color: #000;
    font-family: "Raleway", sans-serif;
  }
`;

const Button = styled.button`
  all: unset;
  box-sizing: border-box;
  cursor: pointer;

  width: 100%;

  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 23px;
  letter-spacing: 0em;

  text-align: center;

  padding: 12px;

  background: #a328d6;
  border-radius: 5px;
`;

const StyledLink = styled(Link)`
  all: unset;
  box-sizing: border-box;
  cursor: pointer;

  color: #fff;
  font-style: normal;
  font-weight: bold;
  font-size: 15px;
  line-height: 18px;
`;

export { Container, Form, Input, Button, StyledLink };

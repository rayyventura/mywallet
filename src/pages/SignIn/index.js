import React, { useState } from "react";
import api from "../../services/api";

import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router";
import {
  Container,
  Form,
  Input,
  Button,
  StyledLink,
} from "../../components/Form";
import Logo from "../../components/Logo";

function SignIn() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { login } = useAuth();
  const navigate = useNavigate();

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const user = { ...formData };

    try {
      const { data } = await api.login(user);
      login(data);
      navigate("/home");
    } catch (error) {
      console.log(error);
      alert("Algo deu errado!");
    }
  }

  return (
    <Container>
      <Logo>MyWallet</Logo>
      <Form onSubmit={handleSubmit}>
        <Input
          placeholder="E-mail"
          type="email"
          onChange={(e) => handleChange(e)}
          name="email"
          value={formData.email}
          required
        />
        <Input
          placeholder="Senha"
          type="password"
          onChange={(e) => handleChange(e)}
          name="password"
          value={formData.password}
          required
        />
        <Button type="submit">Entrar</Button>
      </Form>
      <StyledLink to="/sign-up">Primeira vez? Cadastre-se!</StyledLink>
    </Container>
  );
}

export default SignIn;

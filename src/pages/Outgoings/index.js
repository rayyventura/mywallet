import React, { useState } from "react";
import api from "../../services/api";

import { Container, Form, Input, Button } from "../../components/Form";
import { Title } from "./style";
import useAuth from "../../hooks/useAuth";

function Outgoing() {
  const [formData, setFormData] = useState({
    amount: "",
    description: "",
  });
  const { auth } = useAuth();

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const transaction = { ...formData, type: "outcome" };

    try {
      await api.createTransaction(auth, transaction);
      setFormData({
        amount: "",
        description: "",
      });
    } catch (error) {
      console.log(error);
      alert("Algo deu errado!");
    }
  }

  return (
    <Container alignSelf="flex-start">
      <Title>Nova saída</Title>
      <Form onSubmit={handleSubmit}>
        <Input
          placeholder="Valor"
          type="number"
          onChange={(e) => handleChange(e)}
          name="amount"
          value={formData.amount}
          required
        />
        <Input
          placeholder="Descrição"
          type="text"
          onChange={(e) => handleChange(e)}
          name="description"
          value={formData.description}
          required
        />
        <Button type="submit">Salvar Saída</Button>
      </Form>
    </Container>
  );
}

export default Outgoing;

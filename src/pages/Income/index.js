import React, { useState } from "react";
import api from "../../services/api";

import useAuth from "../../hooks/useAuth";
import { Title } from "./style";
import { Container, Form, Input, Button } from "../../components/Form";

function Income() {
  const [formData, setFormData] = useState({
    total: "",
    description: "",
  });
  const { user } = useAuth();

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const transaction = { ...formData, type: "income" };

    try {
      await api.createTransaction(user, transaction);
      setFormData({
        total: "",
        description: "",
      });
    } catch (error) {
      console.log(error);
      alert("Algo deu errado!");
    }
  }

  return (
    <Container alignSelf="flex-start">
      <Title>Nova entrada</Title>
      <Form onSubmit={handleSubmit}>
        <Input
          placeholder="Valor"
          type="number"
          onChange={(e) => handleChange(e)}
          name="amount"
          value={formData.total}
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
        <Button type="submit">Salvar Entrada</Button>
      </Form>
    </Container>
  );
}

export default Income;

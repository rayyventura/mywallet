import React, { useEffect, useState } from "react";
import api from "../../services/api";
import Loading from "../../assets/loading.gif";

import { Container, Flex, Title, Button, NoTransactions, Span } from "./style";
import useAuth from "../../hooks/useAuth";
import LogoutButton from "../../components/LogoutIcon";
import { ReactComponent as IncomeIcon } from "../../assets/IncomeIcon.svg";
import { ReactComponent as OutcomeIcon } from "../../assets/OutcomeIcon.svg";

function formatTotal(total) {
  return (total / 100).toFixed(2);
}

function Home() {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { user: token } = useAuth();

  async function loadPage() {
    try {
      const { data } = await api.getUser(token);
      setUser(data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      alert("Algo deu errado");
      setUser({});
    }
  }

  useEffect(() => {
    loadPage();
  }, [token]);

  if (isLoading || !user) {
    return <img src={Loading} alt="loading" />;
  }

  return (
    <Container alignSelf="flex-start" padding="0px 25px">
      <Flex direction="row" justifyContent="space-between" alignItems="center">
        <Title>Olá, {user.name}</Title>
        <LogoutButton />
      </Flex>
      <Transactions transactions={user.transactions} totalSum={user.totalSum} />
      <Flex direction="row" gap="15px">
        <Button to="/deposit">
          <IncomeIcon />
          Nova entrada
        </Button>
        <Button to="/withdraw">
          <OutcomeIcon />
          Nova saída
        </Button>
      </Flex>
    </Container>
  );
}

function Transactions({ transactions, totalSum }) {
  if (!transactions || transactions.length === 0) {
    return (
      <Container
        background="#FFF"
        borderRadius="5px"
        margin="0px 0px 15px 0px"
        minHeight="450px"
        justifyContent="center"
      >
        <NoTransactions>
          Não há registros de <br />
          entrada ou saída
        </NoTransactions>
      </Container>
    );
  }

  return (
    <Container
      background="#FFF"
      borderRadius="5px"
      margin="0px 0px 15px 0px"
      padding="20px 10px 10px 10px"
      minHeight="450px"
      justifyContent="space-between"
    >
      <Flex direction="column">
        {transactions.map((transaction) => (
          <Transaction key={transaction.id} {...transaction} />
        ))}
      </Flex>
      <Flex direction="row" justifyContent="space-between" alignItems="center">
        <Span color="#000" bold>
          SALDO
        </Span>
        <Span align="right" color={totalSum > 0 ? "#03AC00" : "#C70000"}>
          {formatTotal(totalSum)}
        </Span>
      </Flex>
    </Container>
  );
}

function Transaction({ id, amount, description, type, createdAt }) {
  return (
    <Flex direction="row" justifyContent="space-between" alignItems="center">
      <Flex direction="row" alignItems="center" gap="10px">
        <Span color="#C6C6C6">{createdAt}</Span>
        <Span color="#000">{description}</Span>
      </Flex>
      <Span align="right" color={type === "deposit" ? "#03AC00" : "#C70000"}>
        {formatTotal(amount)}
      </Span>
    </Flex>
  );
}

export default Home;

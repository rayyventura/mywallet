import axios from "axios";

const BASE_URL = "https://mywalletbank.herokuapp.com/outcome";

function createConfig(token) {
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
}

async function createUser(user) {
  await axios.post(`${BASE_URL}/users`, user);
}

async function login(data) {
  const token = await axios.post(`${BASE_URL}/login`, data);
  return token;
}

async function createTransaction(token, entry) {
  const config = createConfig(token);

  await axios.post(`${BASE_URL}/users/transactions`, entry, config);
}

async function getUser(token) {
  const config = createConfig(token);

  const user = await axios.get(`${BASE_URL}/users`, config);
  return user;
}

const api = {
  createUser,
  login,
  createTransaction,
  getUser,
};

export default api;

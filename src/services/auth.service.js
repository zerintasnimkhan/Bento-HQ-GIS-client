import axios from "axios";
const baseUrl = "http://localhost:3001";

export async function login(email, password) {
  try {
    const url = `${baseUrl}/login`;
    const res = await axios.post(url, { email, password });
    return res.data;
  } catch (error) {
    console.log(error);
    throw new Error("Error logging in.");
  }
}

export async function signup(name, email, password) {
  try {
    const url = `${baseUrl}/register`;
    console.log(name, email, password);
    const res = await axios.post(url, { name, email, password });
    console.log(res);
    return res.data;
  } catch (error) {
    console.log(error);
    throw new Error("Error signing up.");
  }
}


export async function getUserFromToken(token) {
  try {
    const url = `${baseUrl}/auth/user`;
    const res = await axios.get(url, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return res.data;
  } catch (error) {
    console.log(error);
    throw new Error("Error signing up.");
  }
}

export async function verifyUserToken(token) {
  try {
    const url = `${baseUrl}/token-verify`;

    const res = await axios.get(url, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return res;
  } catch (error) {
    console.log(error);
    throw new Error("Error signing up.");
  }
}

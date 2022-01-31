import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";


const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZjNiNDI3Mzc1ZTU1YjlmMWVjNzYwYSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0MzM3MzY3OCwiZXhwIjoxNjQzNjMyODc4fQ.6QR65m7BJ5v8gkNIwejGQvxmaZ6rSP924seU6Pg-BuY";


export const publicRequest = axios.create({
  baseURL: BASE_URL,
});


export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});

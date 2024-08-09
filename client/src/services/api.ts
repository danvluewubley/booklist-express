// src/services/api.ts

import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:3001/api",
  headers: {
    "Content-Type": "application/json",
  },
});


export const login = async (data: { username: string; password: string }) => {
  try {
    const response = await apiClient.post("/auth/login", data);
    return response.data;
  } catch (error) {
    throw error.response?.data || "An error occurred during login.";
  }
};


export const register = async (data: { username: string; password: string }) => {
  try {
    const response = await apiClient.post("/auth/signup", data);
    return response.data;
  } catch (error) {
    throw error.response?.data || "An error occurred during signup.";
  }
};


export const fetchBooks = async () => {
  try {
    const response = await apiClient.get("/books");
    return response.data;
  } catch (error) {
    throw error.response?.data || "An error occurred while fetching books.";
  }
};


export const createBook = async (data: {
  title: string;
  author: string;
  genre: string;
  UserId: string;
}) => {
  try {
    const response = await apiClient.post("/books", data);
    return response.data;
  } catch (error) {
    throw error.response?.data || "An error occurred while creating the book.";
  }
};
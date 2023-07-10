import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Layout from "./components/Layout";
import IndexPage from "./pages/IndexPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

import { UserContextProvider } from "./components/UserContext";
import CreatePost from "./pages/CreatePost";
import PostPage from "./pages/PostPage";
import EditPost from "./pages/EditPost";

function App() {
  return (
    <BrowserRouter>
      <UserContextProvider>
        {" "}
        <Routes>
          <Route path={"/"} element={<Layout />}>
            {" "}
            <Route index element={<IndexPage />} />
            <Route element={<LoginPage />} path={"/login"} />
            <Route element={<RegisterPage />} path={"/register"} />
            <Route element={<CreatePost />} path="/create" />
            <Route element={<PostPage />} path="/post/:id" />
            <Route element={<EditPost />} path="/edit/:id" />
          </Route>
        </Routes>
      </UserContextProvider>
    </BrowserRouter>
  );
}

export default App;

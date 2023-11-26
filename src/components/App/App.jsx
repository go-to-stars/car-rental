import React, { lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "../Layout/Layout.jsx";
import { Container } from "./App.stiled.jsx";
import Home from "../../pages/Home/Home.jsx";

// const Home = lazy(() => import("../../pages/Home/Home.jsx"));
const Catalog = lazy(() => import("../../pages/Catalog/Catalog.jsx"));
const Favorites = lazy(() => import("../../pages/Favorites/Favorites.jsx"));

const App = () => {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </Container>
  );
};

export default App;

import React, { useEffect, lazy } from "react";
import { useDispatch } from "react-redux";
import { getCars } from "../../redux/cars/carsOperations.js";
import { Routes, Route } from "react-router-dom";
import Layout from "../Layout/Layout.jsx";
import { Container } from "./App.stiled.jsx"; 

const Home = lazy(() => import("../../pages/Home/Home.jsx")); 
const Catalog = lazy(() => import("../../pages/Catalog/Catalog.jsx")); 
const Favorites = lazy(() => import("../../pages/Favorites/Favorites.jsx")); 


const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCars());
  }, [dispatch]);

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

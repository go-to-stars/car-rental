import React from "react";
import {
  ContainerHome,
  TitleHome,
  TextHome,
  Img,
  StartImg,
} from "./Home.styled";

const Home = () => {
  return (
    <ContainerHome>      
      <StartImg />
      <TitleHome>
        Car Rental With Economy - Find and Book a Great Deal Today!
      </TitleHome>
      <TextHome>
        Save money on rental cars by searching for car rental deals on
        CarRental. CarRental searches for rental car deals on hundreds of car
        rental sites to help you find the cheapest car rental. Whether you are
        looking for an airport car rental or just a cheap car rental near you,
        you can compare discount car rentals and find the best deals faster at
        CarRental. CarRental also compares deals for many different car types.
        Whether you’re looking for luxury car rentals, SUV rentals, van rentals,
        pickup truck rentals, convertible car rentals, cargo van rentals or
        minivan rentals, you’ll find them all on CarRental.
      </TextHome>
      <Img />
    </ContainerHome>
  );
};

export default Home;

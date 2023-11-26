import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCars,
  selectIsPopUpWindow,
  selectShowPopUpWindow,
} from "../../redux/cars/carsSelectors";
import { closePopUpWindow, hidePopUpWindow } from "../../redux/cars/carsSlice";
import {
  BackDrop,
  ModalWindow,
  RentalCarButton,
  CloseBtn,
  CarsBox,
  CarsImgBox,
  CarsImg,
  FierstLineText,
  NameBox,
  NameBoxSpan,
  RentalConditionsField,
  RentalConditionsFieldSpan,
  SecondLineText,
  DescriptionText,
  DefaultCarsImg,
} from "./Modal.styled";

export const Modal = () => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const cars = useSelector(selectCars);
  const id = useSelector(selectIsPopUpWindow);
  const showPopUpWindow = useSelector(selectShowPopUpWindow);

  useEffect(() => {
    setIsOpen(true);
    function handleKeyDown(e) {
      if (e.code === "Escape") {
        setIsOpen(!isOpen);
        handleBodyScroll(!isOpen);
        dispatch(closePopUpWindow());
        dispatch(hidePopUpWindow());
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [dispatch, isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    handleBodyScroll(!isOpen);
    dispatch(closePopUpWindow());
    dispatch(hidePopUpWindow());
  };

  const handleBodyScroll = (showBackdrop) => {
    if (showBackdrop) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  };

  if (cars) {
    if (id) {
      const car = cars.find((item) => item.id === Number(id));
   
      const addressArray = car.address.split(",");
      const city = addressArray[1].trim();
      const country = addressArray[2].trim();

      const SecondLineFierstPart = `${city} | ${country} | Id: ${car.id} | Year: ${car.year} | Type: ${car.type}`;

      const ThierdLineFierstPart = `Fuel Consumption: ${car.fuelConsumption} | Engine Size: ${car.engineSize} `;

      const modelname = car.model.slice(0, 12);

      const accessories = `${car.accessories[0]} | ${car.accessories[1]} | ${car.accessories[2]} `;
      const functionalities = `${car.functionalities[0]} | ${car.functionalities[1]} | ${car.functionalities[2]} `;
      const rentalConditions = car.rentalConditions.split("\n");

      const age = rentalConditions[0].split(":");
      const mileage =
        car.mileage.toString().slice(0, 1) +
        "," +
        car.mileage.toString().slice(1, 10);

      const price = car.rentalPrice.toString().slice(1, 10);

      return (
        <>
          <BackDrop open={isOpen} onClick={toggleMenu}>
            <ModalWindow open={isOpen}>
              {showPopUpWindow && (
                <CloseBtn onClick={toggleMenu}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M18 6L6 18"
                      stroke="#121417"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M6 6L18 18"
                      stroke="#121417"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </CloseBtn>
              )}
              <CarsBox>
                <CarsImgBox>
                  {car.img ? (
                    <CarsImg src={car.img} alt={car.make + " " + car.model} />
                  ) : (
                    <DefaultCarsImg />
                  )}
                </CarsImgBox>
                <FierstLineText>
                  <NameBox>
                    {car.make} <NameBoxSpan>{modelname}</NameBoxSpan>
                    {", "}
                    {car.year}
                  </NameBox>
                </FierstLineText>
                <SecondLineText>{SecondLineFierstPart}</SecondLineText>
                <SecondLineText>{ThierdLineFierstPart}</SecondLineText>
                <DescriptionText>{car.description}</DescriptionText>
                <DescriptionText>
                  {"Accessories and functionalities:"}
                </DescriptionText>
                <SecondLineText>{accessories}</SecondLineText>
                <SecondLineText>{functionalities}</SecondLineText>
                <DescriptionText>{"Rental Conditions:"}</DescriptionText>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    justifyContent: "flex-start",
                    marginRight: "0",
                  }}
                >
                  <RentalConditionsField>
                    {`${age[0]}:`}
                    <RentalConditionsFieldSpan>{`${age[1]}`}</RentalConditionsFieldSpan>
                  </RentalConditionsField>
                  <RentalConditionsField>
                    {rentalConditions[1]}
                  </RentalConditionsField>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    justifyContent: "flex-start",
                    marginRight: "0",
                  }}
                >
                  <RentalConditionsField>
                    {rentalConditions[2]}
                  </RentalConditionsField>
                  <RentalConditionsField>
                    {"Mileage: "}
                    <RentalConditionsFieldSpan>{`${mileage}`}</RentalConditionsFieldSpan>
                  </RentalConditionsField>
                  <RentalConditionsField>
                    {"Price: "}
                    <RentalConditionsFieldSpan>{`${price}$`}</RentalConditionsFieldSpan>
                  </RentalConditionsField>
                </div>
              </CarsBox>
              <RentalCarButton href="tel:+380730000000">
                Rental car
              </RentalCarButton>
            </ModalWindow>
          </BackDrop>
        </>
      );
    }
  }
};

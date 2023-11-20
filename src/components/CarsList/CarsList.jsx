import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import { selectCars } from "../../redux/cars/carsSelectors";
import { CarsListItem } from "../CarsListItem/CarsListItem";
import { selectIsFavorites } from "../../redux/cars/carsSelectors";
import {
  SearshBox,
  SelectBrand,
  SelectPrice,
  SelectMileageFrom,
  SelectMileageTo,
  Button,
  List,
  ListItem,
  ButtonMore,
} from "./CarsList.styled"; 
const defaultImg = "../../img/defaultCarsImg.jpg";
const defaultState = 12;
const defaultBrand = [
  "Buick",
  "Volvo",
  "HUMMER",
  "Subaru",
  "Mitsubishi",
  "Nissan",
  "Lincoln",
  "GMC",
  "Hyundai",
  "MINI",
  "Bentley",
  "Aston Martin",
  "Pontiac",
  "Lamborghini",
  "Audi",
  "BMW",
  "Chevrolet",
  "Mercedes-Benz",
  "Chrysler",
  "Kia",
  "Land",
];
const defaultPrice = [
  "10",
  "20",
  "30",
  "40",
  "50",
  "60",
  "70",
  "80",
  "90",
  "100",
  "110",
  "120",
  "130",
  "140",
  "150",
];

export const CarsList = (isFavoritePage) => {  
  const [carState, setCarState] = useState(defaultState);
  const [carsArrayState, setCarsArrayState] = useState([]);
  const [carBrands, setCarBrands] = useState();
  const [carPrice, setCarPrice] = useState(0);
  const [carMileageFrom, setCarMileageFrom] = useState(0);
  const [carMileageTo, setCarMileageTo] = useState(100000);
  const isFavorites = useSelector(selectIsFavorites);

  const ollCars = useSelector(selectCars);

  const allBrands =
    defaultBrand.length !== 0 ? ["All brands", ...defaultBrand] : [];
  const allPrice =
    defaultPrice.length !== 0 ? ["All price", ...defaultPrice] : [];

  const handleChangeBrands = (e) => {
    setCarBrands(e.value);   
  };

  const handleChangePrice = (e) => {
    setCarPrice(e.value);    
  };

  const handleChangeMileageFrom = (e) => {   
    setCarMileageFrom(e.target.value);    
  };

  const handleChangeMileageTo = (e) => {
    setCarMileageTo(e.target.value);    
  };

  const handleSearchCars = () => {
    
    const result = ollCars.filter((item) => {      
      const searchCar = isFavoritePage.isFavoritePage
        ? item.make === carBrands &&
          Number(item.rentalPrice.slice(1)) <= Number(carPrice) &&
          Number(item.mileage) >= Number(carMileageFrom) &&
          Number(item.mileage) <= Number(carMileageTo) &&
          isFavorites.toString().includes(item.id.toString())
        : item.make === carBrands &&
          Number(item.rentalPrice.slice(1)) <= Number(carPrice) &&
          Number(item.mileage) >= Number(carMileageFrom) &&
          Number(item.mileage) <= Number(carMileageTo);
      return searchCar;
    });
    
    return setCarsArrayState(result);
  };

  const maxArraylenght = ollCars.length;
  const selectedCars =
    carsArrayState.length > 0
      ? carsArrayState.slice(0, carState)
      : ollCars.slice(0, carState);
  const differenceLenght = maxArraylenght - carState;

  const loadMoreCars = () => {
    let lenghtArr = 0;
    differenceLenght > 12
      ? (lenghtArr = carState + 12)
      : (lenghtArr = carState + differenceLenght);

    setCarState(lenghtArr);
  };

  useEffect(() => {
    // setState((state.cars = selectedCars));
  }, [carState, carBrands, carPrice, carMileageFrom, carMileageTo]);

  return (
    <>
      <SearshBox>
        <SelectBrand
          name="Car brand"
          label="Car brand"
          placeholder="Enter the text"
          className="react-select-container"
          classNamePrefix="react-select"
          defaultValue={carBrands}
          onChange={handleChangeBrands}
          options={allBrands.map((item) => ({
            label: item,
            value: item,
          }))}
        />
        <SelectPrice
          name="Price/ 1 hour"
          label="Price/ 1 hour"
          placeholder="To $"
          className="react-select-container"
          classNamePrefix="react-select"
          defaultValue={150}
          onChange={handleChangePrice}
          options={allPrice.map((item) => ({
            label: item,
            value: item,
          }))}
        />
        <div style={{ display: "flex", justifyContent: "center" }}>
          <SelectMileageFrom
            name="From"
            label="From"
            placeholder="From"           
            value={carMileageFrom}
            onChange={handleChangeMileageFrom}
            style={{ backgroundColor: "#f7f7fb" }}            
          />
          <SelectMileageTo
            name="To"
            label="To"
            placeholder="To"            
            value={carMileageTo}
            onChange={handleChangeMileageTo}           
          />
        </div>
        <Button type="button" onClick={() => handleSearchCars()}>
          Search
        </Button>
      </SearshBox>
      {selectedCars.length > 0 && (
        <List>
          {selectedCars.map((item) => (
            <ListItem key={item.id}>
              <CarsListItem
                id={item.id}
                year={item.year}
                make={item.make}
                model={item.model}
                type={item.type}
                img={item.img ? item.img : defaultImg}
                description={item.description}
                fuelConsumption={item.fuelConsumption}
                engineSize={item.engineSize}
                accessories={item.accessories}
                functionalities={item.functionalities}
                rentalPrice={item.rentalPrice}
                rentalCompany={item.rentalCompany}
                address={item.address}
                rentalConditions={item.rentalConditions}
                mileage={item.mileage}
              />
            </ListItem>
          ))}
        </List>
      )}
      {selectedCars.length > 0 && differenceLenght > 0 && (
        <ButtonMore type="button" onClick={() => loadMoreCars()}>
          Load more
        </ButtonMore>
      )}
    </>
  );
};

CarsList.propTypes = {
  isFavoritePage: PropTypes.bool.isRequired,
};

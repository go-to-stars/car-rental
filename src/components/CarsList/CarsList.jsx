import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { selectCars } from "../../redux/cars/carsSelectors";
import { changePage } from "../../redux/cars/carsSlice";
import { CarsListItem } from "../CarsListItem/CarsListItem";
import { selectIsFavorites, selectPage } from "../../redux/cars/carsSelectors";
import {
  SearshBox,
  Label,
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
  const dispatch = useDispatch(); 
  const [carsArrayState, setCarsArrayState] = useState([]);
  const [carBrands, setCarBrands] = useState("All brands");
  const [carPrice, setCarPrice] = useState("All price");
  const [menuBrandsIsOpen, setMenuBrandsIsOpen] = useState(false);
  const [menuPriceIsOpen, setMenuPriceIsOpen] = useState(false);
  const [carMileageFrom, setCarMileageFrom] = useState(0);
  const [carMileageTo, setCarMileageTo] = useState(100000);
  const isFavorites = useSelector(selectIsFavorites);
  const ollselectedCars = useSelector(selectCars);
  const page = useSelector(selectPage);

  if (ollselectedCars) {
    const ollCars = ollselectedCars.filter((item) =>
      isFavoritePage.isFavoritePage
        ? isFavorites.toString().includes(item.id.toString())
        : ollselectedCars
    );

    const loadMoreBtnVisible = ollselectedCars.length === page * 12;    

    const selectedCars = carsArrayState.length > 0 ? carsArrayState : ollCars;    

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
      const resultFilteredBrand = ollCars.filter((item) => {
        return item.make === carBrands || carBrands === "All brands";
      });
      
      const resultFilteredPrice = resultFilteredBrand.filter((item) => {
        return (
          Number(item.rentalPrice.slice(1)) <= Number(carPrice) ||
          carPrice === "All price"
        );
      });
      
      const resultFilteredMileageFrom = resultFilteredPrice.filter((item) => {
        return Number(item.mileage) >= Number(carMileageFrom);
      });  
      
      const resultFilteredMileageTo = resultFilteredMileageFrom.filter(
        (item) => {
          return Number(item.mileage) <= Number(carMileageTo);
        }
      );     
     
      return setCarsArrayState(resultFilteredMileageTo);
    };

    const loadMoreCars = () => {      
      dispatch(changePage(page + 1));
    };

    const brandMenuIsOpen = () => {
      setMenuBrandsIsOpen(!menuBrandsIsOpen);
    };

    const priceMenuIsOpen = () => {
      setMenuPriceIsOpen(!menuPriceIsOpen);
    };

    return (
      <>
        <SearshBox>
          <Label style={{ width: "224px" }}>
            Car brand
            <SelectBrand
              name="Car brand"
              label="Car brand"
              placeholder="Enter the text"
              className="react-select-container"
              classNamePrefix="react-select"
              defaultValue={"All brands"}
              onChange={handleChangeBrands}
              options={allBrands.map((item) => ({
                label: item,
                value: item,
              }))}
              onMenuOpen={brandMenuIsOpen}
              onMenuClose={brandMenuIsOpen}
              changeMenu={menuBrandsIsOpen}
            />
          </Label>
          <Label style={{ width: "125px" }}>
            Price/ 1 hour
            <SelectPrice
              name="Price/ 1 hour"
              label="Price/ 1 hour"
              placeholder="To $"
              className="react-select-container"
              classNamePrefix="react-select"
              defaultValue={150}
              onChange={handleChangePrice}
              onMenuOpen={priceMenuIsOpen}
              onMenuClose={priceMenuIsOpen}
              changeMenu={menuPriceIsOpen}
              options={allPrice.map((item) => ({
                label: item,
                value: item,
              }))}
            />
          </Label>
          <Label htmlFor="From">
            Сar mileage / km
            <div
              style={{
                position: "relative",
                marginTop: "8px",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <SelectMileageFrom
                name="From"
                label="From"
                placeholder="From"
                // value={carMileageFrom}
                onChange={handleChangeMileageFrom}
                style={{ backgroundColor: "#f7f7fb" }}
              />
              <SelectMileageTo
                name="To"
                label="To"
                placeholder="To"
                // value={carMileageTo}
                onChange={handleChangeMileageTo}
              />
            </div>
          </Label>
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
        {selectedCars.length > 0 && loadMoreBtnVisible && (
          <ButtonMore type="button" onClick={() => loadMoreCars()}>
            Load more
          </ButtonMore>
        )}
      </>
    );
  }
};

CarsList.propTypes = {
  isFavoritePage: PropTypes.bool.isRequired,
};
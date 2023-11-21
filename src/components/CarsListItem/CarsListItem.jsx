import { useDispatch, useSelector } from "react-redux";
import {
  addToFavorites,
  deleteFavorites,
  setPopUpWindow,
} from "../../redux/cars/carsSlice";
import { selectIsFavorites } from "../../redux/cars/carsSelectors";
import PropTypes from "prop-types";

import {
  CarsBox,
  CarsImgBox,
  CarsImg,
  ButtonFavorites,
  FierstLineText,
  NameBox,
  NameBoxSpan,
  Text,
  SecondLineText,
  Button,
} from "./CarsListItem.styled";
const defaultImg = "../../img/defaultCarsImg.jpg";

export const CarsListItem = ({
  id,
  year,
  make,
  model,
  type,
  img,
  accessories,
  functionalities,
  rentalPrice,
  rentalCompany,
  address,
}) => {
  const dispatch = useDispatch();
  const isFavorites = useSelector(selectIsFavorites);

  const favorites = isFavorites.toString().includes(id.toString());

  let changeFavorites = "";

  const toggleFavorites = (id) => {
    changeFavorites = favorites ? deleteFavorites(id) : addToFavorites(id);
    dispatch(changeFavorites);
  };

  const togglePopUpWindow = (id) => {
    dispatch(setPopUpWindow(id));
    document.body.style.overflow = "hidden";
  };

  const addressArray = address.split(",");
  const city = addressArray[1].trim();
  const country = addressArray[2].trim();

  let SecondLine = "";
  const SecondLineFierstPart = `${city} | ${country} | ${rentalCompany}`;
  const SecondLineSecondPart = ` | ${accessories[0]}`;
  if (SecondLineFierstPart.length > 40) {
    SecondLine = SecondLineFierstPart;
  } else {
    SecondLine =
      SecondLineFierstPart +
      SecondLineSecondPart.slice(0, 48 - SecondLineFierstPart.length);
  }

  let ThierdLine = "";
  const ThierdLineFierstPart = `${type} | ${model} | ${id}`;
  const ThierdLineSecondPart = ` | ${functionalities[0]}`;
  if (ThierdLineFierstPart.length > 40) {
    ThierdLine = ThierdLineFierstPart;
  } else {
    ThierdLine =
      ThierdLineFierstPart +
      ThierdLineSecondPart.slice(0, 48 - ThierdLineFierstPart.length);
  }

  const modelname = model.slice(0, 12);

  return (
    <>
      <CarsBox>
        <CarsImgBox>
          <CarsImg src={img ? img : defaultImg} />
        </CarsImgBox>
        <ButtonFavorites
          type="button"
          style={{
            stroke: favorites ? "#3470ff" : "#fff",
            fill: favorites ? "#3470ff" : "none",
          }}
          onClick={() => toggleFavorites({ id })}
        ></ButtonFavorites>
        <FierstLineText>
          <NameBox>
            {make} <NameBoxSpan>{modelname}</NameBoxSpan>
            {", "}
            {year}
          </NameBox>
          <Text>{rentalPrice}</Text>
        </FierstLineText>
        <SecondLineText>{SecondLine}</SecondLineText>
        <SecondLineText>{ThierdLine}</SecondLineText>
        <Button type="button" onClick={() => togglePopUpWindow({ id })}>
          Learn more
        </Button>
      </CarsBox>
    </>
  );
};

CarsListItem.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  img: PropTypes.string.isRequired,
  make: PropTypes.string.isRequired,
  model: PropTypes.string.isRequired,
  rentalPrice: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  rentalCompany: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  accessories: PropTypes.array.isRequired,
  functionalities: PropTypes.array.isRequired,
};

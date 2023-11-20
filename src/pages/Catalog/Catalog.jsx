import React from "react";
import { useSelector } from "react-redux";
import Notiflix from "notiflix";
import { Loader } from "../../components/Loader/Loader.jsx";
import {
  selectIsLoading,
  selectError, 
} from "../../redux/cars/carsSelectors.js";

import { CarsList } from "../../components/CarsList/CarsList.jsx";
import { Modal } from "../../components/Modal/Modal.jsx";

const Catalog = () => {
  
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  return (
    <>
      {isLoading ? <Loader /> : <CarsList isFavoritePage={false} />}
      {error && Notiflix.Notify.failure(`${error}`)}
      <Modal />
    </>
  );
}; 

export default Catalog; 

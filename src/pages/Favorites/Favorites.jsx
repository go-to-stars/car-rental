import React from "react";
import Notiflix from "notiflix";
import { Loader } from "../../components/Loader/Loader.jsx";
import { useSelector } from "react-redux";
import {
  selectIsLoading,
  selectError,  
} from "../../redux/cars/carsSelectors.js";

import { CarsList } from "../../components/CarsList/CarsList.jsx";
import { Modal } from "../../components/Modal/Modal.jsx";

const Favorites = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <CarsList isFavoritePage={true} />
        </>
      )}
      {error && Notiflix.Notify.failure(`${error}`)}
      <Modal />
    </>
  );
}; 

export default Favorites; 

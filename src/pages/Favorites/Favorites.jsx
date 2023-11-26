import { useEffect } from "react";
import Notiflix from "notiflix";
import { Loader } from "../../components/Loader/Loader.jsx";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getCars } from "../../redux/cars/carsOperations.js";
import {
  selectIsLoading,
  selectError,
  selectPage,
} from "../../redux/cars/carsSelectors.js";

import { CarsList } from "../../components/CarsList/CarsList.jsx";
import { Modal } from "../../components/Modal/Modal.jsx";

const Favorites = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();
  const currentPage = useSelector(selectPage);

  useEffect(() => {
    dispatch(getCars(currentPage));
  }, [dispatch, currentPage]);

  return (
    <>
      {isLoading ? <Loader /> : <CarsList isFavoritePage={true} />}
      {error && Notiflix.Notify.failure(`${error}`)}
      <Modal />
    </>
  );
};

export default Favorites;

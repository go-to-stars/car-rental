import { useEffect } from "react";
import { useSelector } from "react-redux";
import Notiflix from "notiflix";
import { useDispatch } from "react-redux";
import { getCars } from "../../redux/cars/carsOperations.js";
import { Loader } from "../../components/Loader/Loader.jsx";
import {
  selectIsLoading,
  selectError,
  selectPage,
} from "../../redux/cars/carsSelectors.js";
import { CarsList } from "../../components/CarsList/CarsList.jsx";
import { Modal } from "../../components/Modal/Modal.jsx";

const Catalog = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();
  const currentPage = useSelector(selectPage);
  
  useEffect(() => {
    dispatch(getCars(currentPage));
  }, [dispatch, currentPage]);

  return (
    <>
      {isLoading ? <Loader /> : <CarsList isFavoritePage={false} />}
      {error && Notiflix.Notify.failure(`${error}`)}
      <Modal />
    </>
  );
};

export default Catalog;

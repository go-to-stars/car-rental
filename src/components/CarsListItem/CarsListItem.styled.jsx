import styled from "@emotion/styled";
import { ReactComponent as ButtonFav } from "../../img/buttonFavorites.svg";
import { ReactComponent as DefaultImg } from "../../img/defaultCarsImg.svg";
export const CarsBox = styled.div`
  position: relative;
  width: 274px;
  height: 426px;
`;

export const CarsImgBox = styled.div`
  width: 274px;
  height: 268px;

  border-radius: 14px;
  overflow: hidden;
`;

export const CarsImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const DefaultCarsImg = styled(DefaultImg)`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const ButtonFavorites = styled(ButtonFav)`
  position: absolute;
  top: 14px;
  left: 242px;
  width: 18px;
  height: 18px;
`;

export const FierstLineText = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 14px;
`;

export const NameBox = styled.div`
  margin-right: auto;
  color: #121417;

  font-size: 16px;
  font-weight: 500;
  line-height: calc(24 / 16);
`;

export const NameBoxSpan = styled.span`
  color: #3470ff;
`;

export const Text = styled.p`
  margin: 0;
  font-size: 16px;
  font-weight: 500;
  line-height: calc(24 / 16);
  background-color: transparent;
`;

export const SecondLineText = styled.div`
  display: flex;
  align-items: center;
  margin-top: 8px;
  color: rgba(18, 20, 23, 0.5);
  font-size: 12px;
  line-height: calc(18 / 12);
`;

export const Button = styled.button`
  width: 100%;
  height: 44px;
  margin-top: 28px;

  border-radius: 12px;
  background-color: #3470ff;

  font-size: 18px;
  text-transform: capitalize;

  border: 1px solid #3470ff;

  color: #fff;

  font-size: 14px;
  font-weight: 600;
  line-height: calc(20 / 14);

  &:hover,
  &:focus {
    background-color: #0b44cd;
    border-color: #0b44cd;
    color: #fff;
  }

  &:focus-visible {
    border-color: #3470ff;
    outline: none;
  }
`;

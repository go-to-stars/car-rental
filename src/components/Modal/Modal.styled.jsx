import styled from "styled-components";
export const BackDrop = styled.div`
  display: ${({ open }) => (open ? "block" : "none")};
  z-index: 90;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  right: 0;
  background-color: rgba(18, 20, 23, 0.5);  
  opacity: 1;
  overflow: hidden !important;
`;
export const ModalWindow = styled.div`
  display: none;
  z-index: 100;
  ${({ open }) =>
    open &&
    `
border-radius: 24px;
width: 541px;
  height: 672px;
background: #fff;
padding:40px;
    display:flex;
    flex-direction:column;
    justify-content: space-between;
    align-items: start;
     position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  `}
`;

export const CarsBox = styled.div`  
  width: 541px;
  height: 600px;
`;

export const CarsImgBox = styled.div`
  width: 541px;
  height: 250px;

  border-radius: 24px;
  overflow: hidden;
`;

export const CarsImg = styled.img`  
  width: 100%;
  height: 100%;  
  object-fit: cover;
`;

export const FierstLineText = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 8px;
`;

export const NameBox = styled.div`
  margin-right: auto;
  margin-top: 16px;
  color: #121417;

  font-size: 16px;
  font-weight: 500;
  line-height: calc(24 / 16);
`;

export const NameBoxSpan = styled.span`
  color: #3470ff;
`;

export const RentalConditionsField = styled.div`  
  margin-top: 8px;
  padding: 7px 14px;
  border-radius: 35px;
  background-color: #f9f9f9;

  font-size: 12px;
  font-weight: 400;
  line-height: calc(18 / 12);

  color: #363535;
`;
export const RentalConditionsFieldSpan = styled.span`
  color: #3470ff;
`;

export const Text = styled.p`
  margin: 0;

  font-size: 16px;
  font-weight: 500;
  line-height: calc(24 / 16);
  background-color: transparent;
`;

export const DescriptionText = styled.p`
  margin: 0;
  margin-top: 14px;

  background-color: transparent;
  color: #121417;

  font-size: 14px;
  font-weight: 400;
  line-height: calc(20 / 14);
`;

export const SecondLineText = styled.div`
  display: flex;
  align-items: center;
  
  margin-top: 4px;

  color: rgba(18, 20, 23, 0.5);

  font-size: 12px;
  line-height: calc(18 / 12);
`;

export const RentalCarButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 168px;
  height: 44px;
  margin-top: 28px;

  border-radius: 12px;
  background-color: #3470ff;

  font-size: 18px;
  text-transform: capitalize;

  border: 1px solid #3470ff;
  text-decoration: none;

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
`;

export const CloseBtn = styled.button`  
  padding: 0;
  position: absolute;
  right: 16px;
  background: none;
  border: none;
  top: 16px;
`;

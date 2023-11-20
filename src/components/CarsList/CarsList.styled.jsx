import Select from "react-select";
import styled from "@emotion/styled";
// import Input from "react-select/dist/declarations/src/components/Input";

export const SearshBox = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  padding-left: 0;
  margin: 91px auto 0;
  margin-left: 50px;
  gap: 18px;

  list-style: none;
`;

export const SelectBrand = styled(Select)`
  .react-select-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 224px;
    height: 48px;
  }

  .react-select__control {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 224px;
    height: 48px;
    padding: 14px 50px 14px 18px;
    border: none;
    border-radius: 14px;
    background-color: #f7f7fb;
    outline: none;
    box-shadow: none;
  }

  .react-select__placeholder {
    font-size: 18px;
    font-weight: 500;
    line-height: calc(20 / 18);

    color: #121417;
  }

  .react-select__indicator-separator {
    display: none;
  }

  .react-select__dropdown-indicator {
    position: absolute;
    right: 18px;
    top: 14px;
    padding: 0;

    color: #121417;
    cursor: pointer;
  }

  .react-select__input-container {
    margin: 0;
    padding: 0;
  }

  .react-select__value-container {
    padding: 0;
    margin: 0;
  }

  .react-select__menu {
    margin-top: 4px;
    height: 272px;
    padding: 14px 8px 14px 18px;
    justify-content: flex-end;
    align-items: flex-start;

    font-size: 16px;
    font-weight: 500;
    line-height: (20/16);
    color: rgba(18, 20, 23, 0.2);

    border-radius: 14px;
    border: 1px solid rgba(18, 20, 23, 0.05);
    box-shadow: 0px 4px 36px 0px rgba(0, 0, 0, 0.02);
  }

  .react-select__menu-list {
    height: 250px;

    &::-webkit-scrollbar {
      width: 8px;
      height: 130px;
      border-radius: 10px;      
      background-color: #fff;
    }
    &::-webkit-scrollbar-thumb {
      border-radius: 10px;
      background-color: rgba(18, 20, 23, 0.05);
    }
  }

  .react-select__single-value {
    color: #121417;
    width: 224px;
  }

  .react-select__option {
    padding-left: 0px;
    background-color: transparent;
    text-overflow: ellipsis;
    transition: color 250ms ease, background-color 250ms ease;

    &:focus,
    &:hover {
      color: #121417;
      cursor: pointer;
    }

    &:active {
      color: #121417;
      cursor: pointer;
    }
  }
`;

export const SelectPrice = styled(Select)`
  .react-select-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 125px;
    height: 48px;
  }

  .react-select__control {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 125px;
    height: 48px;
    padding: 14px 45px 14px 18px;
    border: none;
    border-radius: 14px;
    background-color: #f7f7fb;
    outline: none;
    box-shadow: none;
  }

  .react-select__placeholder {
    font-size: 18px;
    font-weight: 500;
    line-height: calc(20 / 18);

    color: #121417;
  }

  .react-select__indicator-separator {
    display: none;
  }

  .react-select__dropdown-indicator {
    position: absolute;
    right: 18px;
    top: 14px;
    padding: 0;

    color: #121417;
    cursor: pointer;
  }

  .react-select__input-container {
    margin: 0;
    padding: 0;
  }

  .react-select__value-container {
    padding: 0;
    margin: 0;
  }

  .react-select__menu {
    margin-top: 4px;
    height: 272px;
    padding: 14px 8px 14px 18px;
    justify-content: flex-end;
    align-items: flex-start;

    font-size: 16px;
    font-weight: 500;
    line-height: (20/16);
    color: rgba(18, 20, 23, 0.2);

    border-radius: 14px;
    border: 1px solid rgba(18, 20, 23, 0.05);
    box-shadow: 0px 4px 36px 0px rgba(0, 0, 0, 0.02);
  }

  .react-select__menu-list {
    height: 250px;

    &::-webkit-scrollbar {
      width: 8px;
      height: 130px;
      border-radius: 10px;      
      background-color: #fff;
    }
    &::-webkit-scrollbar-thumb {
      border-radius: 10px;
      background-color: rgba(18, 20, 23, 0.05);
    }
  }

  .react-select__single-value {
    color: #121417;
    width: 125px;
  }

  .react-select__option {    
    padding-left: 0px;
    background-color: transparent;
    text-overflow: ellipsis;
    transition: color 250ms ease, background-color 250ms ease;

    &:focus,
    &:hover {
      color: #121417;
      cursor: pointer;
    }

    &:active {
      color: #121417;
      cursor: pointer;
    }
  }
`;

export const SelectMileageFrom = styled.input`
  width: 160px;
  height: 48px;
  padding: 0px 0px 0px 18px;
  border: none;
  border-bottom-left-radius: 14px;
  border-top-left-radius: 14px;
  background-color: #f7f7fb !important;
  border-right: 1px solid rgba(138, 138, 137, 0.2);

  font-size: 16px;
  font-weight: 500;
  line-height: (20/16);
  color: rgba(18, 20, 23, 0.2);
  outline: none;
  box-shadow: none;

  &:: plaseholder {
    font-size: 18px;
    font-weight: 500;
    line-height: calc(20 / 18);

    color: #121417;
  }
`;

export const SelectMileageTo = styled.input`  
  appearance: textfield;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 160px;
  height: 48px;
  padding: 0px 0px 0px 18px;
  border: none;

  border-bottom-right-radius: 14px;
  border-top-right-radius: 14px;
  background-color: #f7f7fb !important;
  font-size: 16px;
  font-weight: 500;
  line-height: (20/16);
  color: rgba(18, 20, 23, 0.2);
  outline: none;
  box-shadow: none;
 
  &:: plaseholder {
    font-size: 18px;
    font-weight: 500;
    line-height: calc(20 / 18);

    color: #121417;
  }

  &::active {
    color: #121417;
    cursor: pointer;
  }
`;

export const Button = styled.button`
  width: 136px;
  height: 44px; 

  border-radius: 12px;
  background-color: #3470ff;

  font-size: 18px;
  text-transform: capitalize;

  border: 1px solid #3470ff;

  color: var(--White, #fff);

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

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  row-gap: 50px;
  column-gap: 29px;  
  align-items: center;
  padding-left: 0;
  margin-top: 16px;  

  list-style: none;  
`;

export const ListItem = styled.li` 
  flex-basis: calc((100% - 87px) / 4);
`;

export const ButtonMore = styled.button`
  display: block;
  margin: 100px auto 87px;

  font-size: 16px;
  font-weight: 500;
  line-height: calc(24 / 16);
  text-decoration-line: underline;

  color: #3470ff;
  background-color: transparent;
  border: none;

  &:hover,
  &:focus {
    color: #0b44cd;
  }
`;

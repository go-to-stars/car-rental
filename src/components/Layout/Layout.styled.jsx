import styled from "@emotion/styled";
import { ReactComponent as Logo } from "../../img/logo.svg";

export const ContainerLayout = styled.div`
  padding: 0;
`;

export const LogoBox = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;

  color: inherit;

  &:hover,
  &:focus {
    color: #0b44cd;
    fill: #0b44cd;
  }
`;

export const Logotype = styled(Logo)`
  width: 100px;
  height: 50px;
`;

export const Logotext = styled.p`
  margin: 0;

  font-weight: 700;
  font-size: 30px;
  text-decoration: none;

  color: inherit;
  visibility: visible;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8vw;
`;

export const NavList = styled.ul`
  display: flex;
  align-items: center;
  gap: 10vw;
  margin-left: 0vw;
  list-style: none;
`;

export const NavListItem = styled.li`
  font-size: 28px;
  text-transform: capitalize;
  color: inherit;

  border-radius: 16px;
  cursor: pointer;

  &:hover,
  &:focus {
    color: #0b44cd;
  }
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 65px;
  padding: 0 15px;
  background-color: inherit;
`;

export const Main = styled.main`
  min-height: calc(100vh - 65px - 62px - 42px);
`;

export const Footer = styled.footer`
  padding: 20px 0;
  height: 22px;
  font-size: 20px;
  text-align: center;
  color: inherit;
`;

import React, { Suspense } from "react";
import { NavLink, Outlet } from "react-router-dom";

import { Loader } from "../Loader/Loader";
import {
  Nav,
  LogoBox,
  Logotype,
  Logotext,
  ContainerLayout,
  NavList,
  NavListItem,
  Header,
  Main,
  Footer,
} from "./Layout.styled";

const Layout = () => {
  return (
    <ContainerLayout>
      <Header>
        <Nav>
          <NavLink to="/" className={"link"}>
            <LogoBox>
              <Logotype />              
              <Logotext>CarRental</Logotext>             
            </LogoBox>
          </NavLink>
          <NavList className={"contacts"}>
            <NavListItem>
              <NavLink to="/" className={"link"}>
                Home
              </NavLink>
            </NavListItem>
            <NavListItem>
              <NavLink to="/catalog" className={"link"}>
                Сatalog
              </NavLink>
            </NavListItem>
            <NavListItem>
              <NavLink to="/favorites" className={"link"}>
                Favorites
              </NavLink>
            </NavListItem>
          </NavList>
        </Nav>
      </Header>
      <Main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </Main>
      <Footer>Copyright IvS © 2023. All rights reserved.</Footer>
    </ContainerLayout>
  );
}; 
export default Layout; 

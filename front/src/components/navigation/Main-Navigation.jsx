import React from 'react';
import '../../assets/style/Main-Navigation-Style.css';
import {
  Navbar, Nav, NavItem, NavLink, NavbarBrand,
} from 'reactstrap';
import logo from '../../assets/images/Lyon-lion.png';

const MainNav = () => (
  <Navbar className="fixed-adapt navbar-light bg-light">
    <div className="block">
      <NavbarBrand href="/">
        <img src={logo} className="logo" alt="Eco-hub logo" />
      </NavbarBrand>
      <Nav className="navbar-nav mr-auto">
        <NavItem>
          <NavLink href="/">
            <i className="fas fa-home icon" />
            <span className="linkname ml-3">Home</span>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">
            <i className="fab fa-pagelines icon ml-1" />
            <span className="linkname ml-3">Gardening</span>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">
            <i className="fas fa-shopping-cart icon" />
            <span className="linkname ml-3">Groceries</span>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">
            <i className="fas fa-mail-bulk icon" />
            <span className="linkname ml-3">Contact</span>
          </NavLink>
        </NavItem>
      </Nav>
    </div>
  </Navbar>
);

export default MainNav;

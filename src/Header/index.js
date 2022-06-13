import { Dropdown } from 'bootstrap';
import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Port Lookout</NavbarBrand>
          <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ms-auto" navbar>
              <NavItem>
                <NavLink href="/Pricing/">Pricing</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/Features/">Features</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/ContactUs/">Contact Us</NavLink>
              </NavItem>
              {/* include potential dropdown here */}
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

// potential Dropdown<UncontrolledDropdown nav inNavbar>
// <DropdownToggle nav caret>
//   Options
// </DropdownToggle>
// <DropdownMenu right>
//   <DropdownItem>
//     Option 1
//   </DropdownItem>
//   <DropdownItem>
//     Option 2
//   </DropdownItem>
//   <DropdownItem divider />
//   <DropdownItem>
//     Reset
//   </DropdownItem>
// </DropdownMenu>
// </UncontrolledDropdown>
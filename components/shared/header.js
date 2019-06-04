import React from 'react';
import ActiveLink from '../ActiveLink';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
 } from 'reactstrap';

 import auth0 from '../../Services/auth0';

 const BsNavLink=(props)=>{
     const{route,title}=props;
     return(

      <ActiveLink activeClassName="active" route={route}>
        <a className="nav-link port-navbar-link">{title}  </a>

      </ActiveLink>

       
     )
 }

 const Login=()=>{
     return(
         <span onClick={auth0.login} className="nav-link port-navbar-link clickable">Login</span>
     )
 }

 const Logout=()=>{
    return(
        <span onClick={auth0.logout}  className="nav-link port-navbar-link clickable">Logout</span>
    )
}

export default class Example extends React.Component {
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
  render() {

    const {isAuthenticated,user,className}=this.props;
    const{isOpen}=this.state;

    const menuOpenClass= isOpen ? 'menu-open' : 'menu-close';
        return (
      <div>
        <Navbar className={`port-navbar port-nav-base absolute ${className} ${menuOpenClass}`} color="transparent" dark expand="md">
          <NavbarBrand className="port-navbar-brand" href="/">OTESH-TECH</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem className="port-navbar.item">
               <BsNavLink route="/" title="Home"/>
              </NavItem>
              <NavItem className="port-navbar.item">
               <BsNavLink route="/about" title="About"/>
              </NavItem>
              <NavItem className="port-navbar.item">
               <BsNavLink route="/portfolio" title="Portfolio"/>
              </NavItem>
              <NavItem className="port-navbar.item">
               <BsNavLink route="/blogs" title="Blogs"/>
              </NavItem>
              <NavItem className="port-navbar.item">
               <BsNavLink route="/cv" title="CV"/>
              </NavItem>

              {!isAuthenticated &&
              <NavItem className="port-navbar.item">
               <Login />
              </NavItem>
              }
              {isAuthenticated &&
              <NavItem className="port-navbar.item">
               <Logout />
              </NavItem>
              }
              
                          
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
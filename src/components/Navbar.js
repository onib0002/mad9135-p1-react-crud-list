import { NavLink } from "react-router-dom";
import {
  Navbar,
  Nav,
  NavItem,
  NavbarBrand,
  Button,
  Container
} from "reactstrap";

export default function NavBar(props){
  return(
    <Navbar light expand="md" color="dark" dark>
      <Container>
      <Nav>
          <NavLink to={{pathname: '/addList'}}>
            <Button className="btnAdd" size="sm" >Add new</Button></NavLink>
        </Nav>
        <NavbarBrand>Employee List</NavbarBrand>
      </Container>
    </Navbar>  

  );
}

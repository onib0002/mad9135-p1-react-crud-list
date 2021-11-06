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
    <Navbar color="dark" dark>
      <Container>
      <Nav>
          <NavLink to={{pathname: '/addList'}}>
            <Button>Add new</Button></NavLink>
        </Nav>
        <NavItem>Employee List</NavItem>
      </Container>
    </Navbar>  

  );
}

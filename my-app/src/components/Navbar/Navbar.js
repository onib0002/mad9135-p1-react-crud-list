import { NavLink } from "react-router-dom";


export default function NavBar(props){
  return(
    <div className="navbar">
      <NavLink to={{pathname: '/list'}}><button>Add new</button></NavLink>
      <strong>Employee List</strong>
    </div> 
  );
}

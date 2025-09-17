import { Link, NavLink } from "react-router";


export function NavLinkExample() {
  return (
    <div className="flex gap-4">
  
          <NavLink to="/employee">employee</NavLink>
  
          <NavLink to="/product">products</NavLink>
     
          <NavLink to="/employee/10">employee Info</NavLink>

    </div>
  );
}

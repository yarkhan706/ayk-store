import { Link, Outlet } from "react-router-dom";
import {ReactComponent as crownIcon} from "../../assets/crown.svg";

const Navigation = () =>
{
  return (
    <>
      <div className="navigation">
        <Link className="nav-logo-container" to = "/">
         <crownIcon className = "logo"/>
        </Link>
        <div className="nav-links-container">
            <Link className="nav-link" to="shop">
                SHOP
            </Link>
        </div>
      </div>
      <Outlet />
    </>
    
  );
}
export default Navigation;
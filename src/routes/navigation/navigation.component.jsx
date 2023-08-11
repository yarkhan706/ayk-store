import { Link, Outlet } from "react-router-dom";
import './navigation.styles.scss'
import  {ReactComponent as CrownIcon}  from "../../assets/crown.svg";



const Navigation = () =>
{
  return (
    <>
      <div className="navigation">
        <Link className="nav-logo-container" to = "/">
         <CrownIcon className = "logo"/>
        </Link>
        <div className="nav-links-container">
            <Link className="nav-link" to="/shop">
                SHOP
            </Link>
            <Link className="nav-link" to="/sign-in">
                SIGN IN 
            </Link>
        </div>
      </div>
      <Outlet />
    </>
    
  );
}
export default Navigation;
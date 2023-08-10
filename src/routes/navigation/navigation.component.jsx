import { Link, Outlet } from "react-router-dom";

const Navigation = () =>
{
  return (
    <>
      <div className="navigation">
        <Link className="nav-logo-container" to = "/">
        <div>LOGO</div>
        </Link>
        <div className="nav-links-container">
            <Link className="nav-link" to="/shop">
                SHOP
            </Link>
        </div>
      </div>
      <Outlet />
    </>
    
  );
}
export default Navigation;
import { Link, Outlet } from "react-router-dom";
import "./navigation.styles.scss";
import { ReactComponent as CrownIcon } from "../../assets/crown.svg";
import { useContext } from "react";
import { UserContext } from "../../context/user.context";
import {userSignOut} from '../../utils/firebase/firebase.utils'

const Navigation = () => {
  const { currentUser,setCurrentUser } = useContext(UserContext);
  const signOutHandler = async () =>{
    await userSignOut();
    setCurrentUser(null);
  }
  return (
    <>
      <div className="navigation">
        <Link className="nav-logo-container" to="/">
          <CrownIcon className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={signOutHandler}>SIGN OUT</span>
          ) : (
            <Link className="nav-link" to="/auth">
              SIGN IN
            </Link>
          )}
        </div>
      </div>
      <Outlet />
    </>
  );
};
export default Navigation;

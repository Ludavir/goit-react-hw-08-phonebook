import NavBarAuth from './NavBarAuth/NavBarAuth';
import UserMenu from './usermenu/UserMenu';

import { isUserLogin } from 'redux/auth/auth-selectors';
import { useSelector } from 'react-redux';

const NavBar = () => {
  const isLogin = useSelector(isUserLogin);
  return (
    <div>
      {!isLogin && <NavBarAuth />}
      {isLogin && <UserMenu />}
    </div>
  );
};
export default NavBar;

import { AiOutlineMenu } from 'react-icons/ai';

const Header = () => {
  return (
    <div className="header-wrap">
      <div>
        <div className="title-name">
          <img
            src="https://assets-global.website-files.com/636dd759d71287e8ac7e6280/643439bd94363f4d30f385c1_Primary%20Logo%20-%20Black.svg"
            alt="title"
          />
        </div>
      </div>
      <div className="navbar-wrap">
        <div className="nav-1">Discover</div>
        <div className="nav-1">For job seekers</div>
        <div className="nav-1">For companies</div>
        <div className="login-btn">Log In</div>
        <div className="signup-btn">Sign Up</div>
      </div>
      <div className="menu-bar">
        <div>
          <AiOutlineMenu />
        </div>
      </div>
    </div>
  );
};
export default Header;

import { useState } from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/auth/operations";
import css from "./UserLogo.module.css";

const UserLogo = () => {
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = (e) => {
    setAnchorEl(null);
  };

  const handleLogout = (e) => {
    dispatch(logout());
    setAnchorEl(null);
  };

  //
  return (
    <div className={css.box}>
      {/* <symbol id="icon-user" viewBox="0 0 32 32"> */}
      <button className={css.userImg}>
        <svg></svg>
      </button>
      {/* <img src="" alt="user avatar" className={css.userImg} /> */}
      <p className={css.text}>Username</p>
    </div>
  );
};

export default UserLogo;

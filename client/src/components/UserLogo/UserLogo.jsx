import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/auth/operations";
import css from "./UserLogo.module.css";
import { selectUser } from "../../redux/auth/selectors";
// import { UserInfoModal } from "../UserInfoModal";
// import { LogoutModal } from "../LogoutModal";

const UserLogo = () => {
  const dispatch = useDispatch();
  // const [anchorEl, setAnchorEl] = useState(null);
  // const open = Boolean(anchorEl);
  const user = useSelector(selectUser);

  // const handleClick = (e) => {
  //   setAnchorEl(e.currentTarget);
  // };

  // const handleClose = (e) => {
  //   setAnchorEl(null);
  // };

  // const handleLogout = (e) => {
  //   dispatch(logout());
  //   setAnchorEl(null);
  // };

  // modal - dialog
  // const [openDialog, setOpenDialog] = useState(false);

  // const handleEdit = () => {
  //   setOpenDialog(true);
  // };

  // const handleCloseDialog = () => {
  //   setOpenDialog(false);
  // };

  return (
    <>
      <div className={css.userLogo}>
        <button
          className={css.userImg}
          // onClick={handleClick}
        >
          <span className={css.iconSpan}>
            <svg
              className={css.iconSvg}
              stroke="currentColor"
              fill="none"
              stroke-width="2"
              viewBox="0 0 24 24"
              stroke-linecap="round"
              stroke-linejoin="round"
              height="24px"
              width="24px"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </span>
        </button>
        <p className={css.text}>{user.name}</p>
      </div>

      <div className={css.isHidden} data-modal>
        <div
          // anchorEl={anchorEl}
          className={css.userLogoModal}
          // onClose={handleClose}
          // open={open}
        >
          <div className={css.edit}>
            <p>Edit Profile</p>
            <button
              className={css.editButton}
              // onClick={handleEdit}
            >
              <svg
                width="14"
                height="15"
                viewBox="0 0 14 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.62571 11.5323C1.67166 11.1188 1.69463 10.9121 1.75719 10.7188C1.81269 10.5474 1.89111 10.3842 1.99031 10.2338C2.10213 10.0642 2.24922 9.91713 2.5434 9.62295L9.91636 2.25001C10.5607 1.60568 11.6054 1.60568 12.2497 2.25001V2.25001C12.894 2.89434 12.894 3.93901 12.2497 4.58334L4.87673 11.9563C4.58255 12.2505 4.43546 12.3976 4.26589 12.5094C4.11546 12.6086 3.9523 12.687 3.78085 12.7425C3.58761 12.8051 3.38087 12.828 2.96738 12.874L1.45801 13.0417L1.62571 11.5323Z"
                  stroke="#23262A"
                  stroke-width="1.3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </button>
          </div>
          <button
            className={css.logoutButton}
            // onClick={handleLogout}
          >
            <span className={css.logoutButtonText}>Logout</span>
            <span>
              <svg
                width="18"
                height="19"
                viewBox="0 0 18 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.75 9.5H12.75"
                  stroke="#FAFAFA"
                  stroke-width="1.3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M9 4.25L14.25 9.5L9 14.75"
                  stroke="#FAFAFA"
                  stroke-width="1.3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </span>
          </button>
        </div>
      </div>

      {/* <UserInfoModal open={openDialog} onCLose={handleCloseDialog} /> */}
      {/* <LogoutModal open={openDialog} onCLose={handleCloseDialog} /> */}
    </>
  );
};

export default UserLogo;

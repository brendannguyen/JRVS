/**
 * @file MenuBar Component
 *
 * @description A navigation bar component that displays a title, subtitle, and user information. It includes:
 * - A logo or branding section.
 * - Conditional display of user points based on user type.
 * - Navigation buttons for units and user profile with a dropdown menu for profile options.
 * - The dropdown menu provides links for profile, details, and logout functionality.
 *
 * @module MenuBar
 * @requires react
 * @requires @mui/material/Unstable_Grid2
 * @requires @mui/material/IconButton
 * @requires @mui/icons-material/Face
 * @requires @mui/icons-material/School
 * @requires @mui/material/Menu
 * @requires @mui/material/MenuItem
 * @requires @mui/material/ListItemIcon
 * @requires @mui/material/Divider
 * @requires @mui/icons-material/Logout
 * @requires ../context/ApiProvider
 *
 * @param {string} title - The main title displayed in the menu bar.
 * @param {string} subtitle - The subtitle displayed below the title.
 *
 * @returns {JSX.Element} The rendered menu bar component with user information and navigation options.
 */

import React, { useEffect, useState } from "react";
import { useApi } from "../context/ApiProvider";

import Grid from "@mui/material/Unstable_Grid2";
import { IconButton, Button, Typography } from "@mui/material";
import FaceIcon from "@mui/icons-material/Face";
import SchoolIcon from "@mui/icons-material/School";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import Logout from "@mui/icons-material/Logout";

const shortenString = (str, num) => {
  if (str.length <= num) {
    return str;
  }
  return str.slice(0, num) + "...";
};

const MenuBar = ({ title, subtitle }) => {
  title = title ? title : "";
  subtitle = subtitle ? subtitle : "";

  const { getData, postData } = useApi();
  const [user, setUser] = useState({ username: "", points: 0, usertype: "" });
  // eslint-disable-next-line no-unused-vars
  const [isUserLoading, setIsUserLoading] = useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await postData("api/auth/current", { token });
        const userData = await getData(`api/users/id/${res.decoded.id}`);

        setUser({
          username: userData.username,
          points: userData.points || 0,
          usertype: userData.usertype,
          firstname: userData.firstname,
        });
        setIsUserLoading(false);
      } catch (error) {
        console.log(error);
        setIsUserLoading(true);
      }
    };
    fetchUser();
  }, [getData]);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleProfile = () => {
    setAnchorEl(null);
    window.location.href = "/profile";
  };
  const handleDetails = () => {
    setAnchorEl(null);
    window.location.href = "/editprofile";
  };

  const handleLogout = () => {
    setAnchorEl(null);
    localStorage.removeItem("token");
    localStorage.removeItem("skills-learning-pathway");
    window.location.href = "/login";
  };

  return (
    <Grid
      container
      spacing={2}
      columns={22}
      style={{ padding: "30px 30px 20px 60px", backgroundColor: "#3CA3EE" }}
    >
      <Grid
        xs={2}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "right",
        }}
      >
        <p className="russo-one-regular text-5xl text-white">JRVS</p>
      </Grid>
      <Grid xs={13}></Grid>
      <Grid
        xs={7}
        style={{
          color: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "right",
        }}
      >
        {user.usertype === "student" && (
          <div
            style={{
              padding: "10px",
              backgroundColor: "#FFC700",
              borderRadius: "20px",
              marginRight: "10px",
            }}
          >
            <p className="russo-one-regular text-4xl">
              &nbsp;{user.points} 💰&nbsp;
            </p>
          </div>
        )}

        {user.usertype === "teacher" && <div></div>}

        <IconButton
          href="/units"
          aria-label="school"
          style={{ color: "white", fontSize: "40px", marginRight: "10px" }}
        >
          <SchoolIcon fontSize="inherit" />
        </IconButton>

        <React.Fragment>
          <Button onClick={handleClick}>
            <Typography
              sx={{
                color: "white",
                fontSize: "20px",
                fontWeight: 700,
                paddingRight: "2px",
              }}
            >
              {user.firstname && shortenString(user.firstname, 7)}
            </Typography>
            <IconButton
              aria-label="face"
              style={{ color: "white", fontSize: "40px" }}
            >
              <FaceIcon fontSize="inherit" />
            </IconButton>
          </Button>

          <Menu
            anchorEl={anchorEl}
            id="account-menu"
            open={open}
            onClose={handleClose}
            onClick={handleClose}
            transformOrigin={{ horizontal: "right", vertical: "top" }}
            anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
          >
            <MenuItem
              onClick={handleProfile}
              sx={{
                padding: "16px 28px",
                fontSize: "18px",
                justifyContent: "end",
              }}
            >
              My Profile
            </MenuItem>
            <MenuItem
              onClick={handleDetails}
              sx={{
                padding: "16px 28px",
                fontSize: "18px",
                justifyContent: "end",
              }}
            >
              My Details
            </MenuItem>
            <Divider />
            <MenuItem
              onClick={handleLogout}
              sx={{
                padding: "16px 28px",
                fontSize: "18px",
                justifyContent: "start",
              }}
            >
              <ListItemIcon>
                <Logout fontSize="small" />
              </ListItemIcon>
              Logout
            </MenuItem>
          </Menu>
        </React.Fragment>
      </Grid>

      <Grid xs={1}></Grid>
      <Grid xs={20}>
        <Grid xs={22}>
          <p
            style={{
              textAlign: "center",
              font: "Roboto",
              fontSize: "50px",
              fontWeight: "700",
              color: "white",
            }}
          >
            {title}
          </p>
        </Grid>
        <Grid xs={22}>
          <p
            style={{
              textAlign: "center",
              font: "Roboto",
              fontSize: "30px",
              fontWeight: "400",
              color: "white",
            }}
          >
            {subtitle}
          </p>
        </Grid>
      </Grid>
      <Grid xs={1}></Grid>
    </Grid>
  );
};

export default MenuBar;

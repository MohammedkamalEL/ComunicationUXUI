import styled from "@emotion/styled";
import {
  AppBar,
  Avatar,
  Box,
  InputBase,
  Menu,
  MenuItem,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";

// icone
import Groups2Icon from "@mui/icons-material/Groups2";
import Badge from "@mui/material/Badge";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";

// img
import m1 from "../static/img/Simple Professional Name Introduction LinkedIn Profile Picture.png";
import { useState } from "react";

const StyleToobbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});
const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: "5px",
  width: "40%",
}));

const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "20px",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));
const Larg = styled(Stack)(({ theme }) => ({
  display: "none",
  alignItems: "center",
  gap: "20px",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

export default function Navbar() {
  const [open, setopen] = useState(false);

  return (
    <AppBar position="sticky">
      <StyleToobbar>
        {/* left side */}

        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          Moh-Kamal
        </Typography>
        {/* ======left side====== */}
        <Groups2Icon sx={{ display: { xs: "block", sm: "none" } }} />
        {/* center side */}
        <Search>
          <InputBase placeholder="Search..." />
        </Search>
        {/* ======center side====== */}

        {/* right side */}

        <Larg
          direction="row"
          spacing={2}
          sx={{ display: "flex", alignItems: "center" }}
        >
          <Badge color="error" badgeContent={4}>
            <MailIcon />
          </Badge>
          <Badge color="error" badgeContent={4}>
            <NotificationsIcon />
          </Badge>
          <Avatar
            alt="Mohammed Kamal"
            src={m1}
            sx={{ width: 45, height: 45 }}
            onClick={() => {
              open ? setopen(false) : setopen(true);
            }}
          />
        </Larg>

        <UserBox
          sx={{ xs: "block", sm: "none" }}
          onClick={() => {
            open ? setopen(false) : setopen(true);
          }}
        >
          <Typography>Mohammed</Typography>
          <Avatar
            alt="Mohammed Kamal"
            src={m1}
            sx={{ width: 45, height: 45 }}
          />
        </UserBox>

        {/* ======right side====== */}
        <Menu
          id="demo-positioned-menu"
          aria-labelledby="demo-positioned-button"
          open={open}
          onClose={() => {
            setopen(false);
          }}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
        >
          <MenuItem onClick={(e) => setopen(false)}>Profile</MenuItem>
          <MenuItem onClick={(e) => setopen(false)}>My account</MenuItem>
          <MenuItem onClick={(e) => setopen(false)}>Logout</MenuItem>
        </Menu>
      </StyleToobbar>
    </AppBar>
  );
}

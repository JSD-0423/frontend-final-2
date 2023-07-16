import {
  Box,
  Stack,
  Typography,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  Divider,
} from "@mui/material";
import { FiSearch } from "react-icons/fi";
import DefaultInput from "../inputs/default-input";
import Logo from "../../assets/icons/logo.svg";
import heartIcon from "../../assets/icons/heart-primary.svg";
import userIcon from "../../assets/icons/user.svg";
import bagIcon from "../../assets/icons/bag.svg";
import NavLink from "../links/nav-link";
import useMediaQuery from "@mui/material/useMediaQuery";
import ButtonWithIcon from "../buttons/button-with-Icon";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import { useState } from "react";

const Header = ({ Categories }) => {
  const isLaptop = useMediaQuery((theme) => theme.breakpoints.down("lg"));
  const isTablet = useMediaQuery((theme) => theme.breakpoints.down("md"));
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <List>
      <ListItem>
        <ListItemText primary={"Categories"} />
      </ListItem>
      <Divider />
      {["Handbags", "Watches", "Skincare", "Jewellery", "Apperels"].map(
        (text) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        )
      )}
      <Divider />
      {[heartIcon, userIcon, bagIcon].map((icon, index) => {
        return isMobile ? (
          <ListItem key={index}>
            <ListItemButton>
              <ListItemIcon>
                <img src={icon} />
              </ListItemIcon>
              <ListItemText
                primary={
                  index === 0
                    ? "Favourites"
                    : index === 1
                    ? "User Profile"
                    : "Cart"
                }
              />
            </ListItemButton>
          </ListItem>
        ) : null;
      })}
    </List>
  );

  return (
    <Stack
      sx={{
        paddingTop: "30px",
        paddingBottom: "30px",
        paddingLeft: "20px",
        paddingRight: "20px",
      }}
      direction="row"
      justifyContent="space-between"
      alignItems="center"
    >
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
        gap={6}
      >
        <Box
          sx={{
            display: isLaptop ? "none" : "block",
          }}
        >
          <img src={Logo} />
        </Box>
        {isTablet ? (
          <ButtonWithIcon action={handleDrawerToggle} icon={<MenuIcon />} />
        ) : (
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            gap={3}
          >
            {["Handbags", "Watches", "Skincare", "Jewellery", "Apperels"].map(
              (text, index) => {
                return (
                  <NavLink
                    component={<Typography variant="h1">{text}</Typography>}
                    key={index}
                  />
                );
              }
            )}
          </Stack>
        )}
      </Stack>
      <Stack direction={"row"} gap={3} justifyContent={"space-between"}>
        <Box
          sx={{
            width: isLaptop ? "200px" : "362px",
          }}
        >
          <DefaultInput
            placeholder="Search for products or brands..."
            adorment={<FiSearch size={25} />}
            size={isLaptop ? "0.6rem" : "0.9rem"}
          />
        </Box>

        {/* TODO: change Icon Button to buttonWithIcon */}
        <Stack gap={2} direction={"row"} justifyContent={"space-between"}>
          {[heartIcon, userIcon, bagIcon].map((icon, index) => {
            return !isMobile ? (
              <IconButton key={index} sx={{ padding: "0px" }}>
                <img src={icon} />
              </IconButton>
            ) : null;
          })}
        </Stack>
      </Stack>
      <Drawer
        // container={container}
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
      >
        {drawer}
      </Drawer>
    </Stack>
  );
};

export default Header;

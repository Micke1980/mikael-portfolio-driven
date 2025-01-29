import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Container } from "@mui/material";
import logo from "../assets/logo-full-white.png";
import { Link } from "react-router-dom";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Button from "@mui/material/Button";
import { Stack } from "@mui/material";
import { NavHashLink } from "react-router-hash-link";

const drawerWidth = 240;
const navItems = [
  { text: "OM MIG", path: "/#about" },
  { text: "PROJEKT", path: "/#projects" },
  { text: "OMDÖMEN", path: "/#reviews" },
  { text: "KONKTAKT", path: "/#contact" },
];

const navbarStyle = {
  borderRadius: "40px", // Rundade hörn
  backgroundColor: "rgba(0, 0, 0, 0.85)", // Semi-transparent svart
  border: "1px solid rgba(255, 255, 255, 0.2)", // Tunn vit kantlinje
  transform: "translateY(14px)",
  backdropFilter: "blur(1px)", // Suddig bakgrundseffekt
};

export default function Navbar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <img
        src={logo}
        alt="Techover"
        width={"150px"}
        style={{ margin: "8px 0px" }}
      />
      <Divider />
      <List>
        {navItems.map((item, i) => (
          <ListItem key={i} disablePadding>
            <ListItemButton
              sx={{ textAlign: "center" }}
              component={NavHashLink}
              to={item.path}
              smooth
            >
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      {/* AppBar med runda hörn och centrering */}
      <AppBar
        position="fixed"
        color="transparent"
        elevation={2}
        sx={{
          ...navbarStyle,
          width: "90%", // Gör navbaren smalare för att ge luft
          maxWidth: "1200px", // Maximal bredd
          margin: "0 auto", // Centrera navbaren
          left: 0,
          right: 0,
        }}
      >
        <Container>
          <Toolbar
            sx={{
              padding: "0px !important",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            {/* Logotyp */}
            <Link to="/" style={{ textDecoration: "none" }}>
              <img src={logo} alt="Techover" width={"150px"} />
            </Link>

            {/* Länkar för större skärmar */}
            <Stack
              direction="row"
              spacing={2}
              sx={{
                display: { xs: "none", md: "flex" }, // Dölj på små skärmar
              }}
            >
              {navItems.map((item, i) => (
                <Button
                  key={i}
                  component={NavHashLink}
                  to={item.path}
                  smooth
                  variant="text"
                  sx={{
                    color: "white",
                    fontWeight: "400",
                    textTransform: "none",
                  }}
                >
                  {item.text}
                </Button>
              ))}
            </Stack>

            {/* Hamburgermeny som alltid visas */}
            <IconButton
              aria-label="open drawer"
              edge="end"
              onClick={handleDrawerToggle}
              sx={{
                color: "white",
                display: "flex", // Hamburgaren visas alltid
              }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Extra Box för att ge plats under navbaren */}
      <Box sx={{ height: 80 }} />

      {/* Drawer (Hamburgermeny) */}
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              backgroundColor: "rgba(0, 0, 0, 0.9)", // Mörkare bakgrund för mobilen
              color: "white",
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </>
  );
}


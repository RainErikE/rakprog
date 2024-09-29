import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material"
import React, { useState } from "react"
import MenuIcon from "@mui/icons-material/Menu"
import { Link } from "react-router-dom"

interface AppHeaderProps {
  profileName: string // Define the type for the prop
}

const AppHeader: React.FC<AppHeaderProps> = ({ profileName }) => {
  const [drawerOpen, setDrawerOpen] = useState(false)

  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open)
  }

  const menuItems = [
    { text: "Landing", path: "/landing" },
    { text: "Profile", path: "/myprofile" },
    { text: "Counter", path: "/counter" },
  ]
  return (
    <>
      <AppBar position="sticky">
        <Toolbar
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            position: "relative",
          }}
        >
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>

          <Typography
            variant="h5"
            sx={{
              position: "absolute",
              left: "50%",
              transform: "translateX(-50%)",
              textAlign: "center",
            }}
          >
            {profileName}
          </Typography>

          <Box>
            <Typography
              variant="body1"
              sx={{ textAlign: "right" }}
            >
              RakProg 2024
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
      >
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <List>
            {menuItems.map(item => (
              <ListItem
                key={item.text}
                component={Link}
                to={item.path}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <ListItemText primary={item.text} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  )
}

export default AppHeader

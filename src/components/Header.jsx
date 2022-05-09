import React from "react";
import {
  Stack,
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Avatar,
  Tabs,
  Tab,
  Link,
} from "@mui/material";
import LogoDevIcon from "@mui/icons-material/LogoDev";
import { Link as RouterLink } from "react-router-dom";

function Header() {
  return (
    <AppBar position="static" sx={{ marginBottom: "20px" }}>
      <Toolbar>
        <IconButton>
          <LogoDevIcon sx={{ color: "white", fontSize: "3rem" }} />
        </IconButton>
        <Typography variant="h3" color="white" sx={{ flexGrow: 1 }}>
          -Pokhrel
        </Typography>
        <Stack spacing={2} direction="row" alignItems={"center"}>
          <RouterLink to="/web-dev-blog-react-flow">
            <Button size='large' sx={{color:"white"}}>Web Journey</Button>
          </RouterLink>

          <RouterLink to="/example">
          <Button size='large' sx={{color:"white"}}>example</Button>
          </RouterLink>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}

export default Header;

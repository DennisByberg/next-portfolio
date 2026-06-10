"use client";
import LINKS_DATA from "@/data/linksData";
import { version } from "@/package.json";
import {
  HEADER_APP_BAR_STYLE,
  HEADER_APP_BAR_STYLE_TOP,
} from "@/styles/headerSX";
import BuildIcon from "@mui/icons-material/Build";
import FolderIcon from "@mui/icons-material/Folder";
import HomeIcon from "@mui/icons-material/Home";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import PeopleIcon from "@mui/icons-material/People";
import PersonIcon from "@mui/icons-material/Person";
import WorkHistoryIcon from "@mui/icons-material/WorkHistory";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import ToTopButton from "./Buttons/ToTopButton";

const LINK_ICONS: Record<string, React.ReactNode> = {
  Home: <HomeIcon fontSize="small" />,
  About: <PersonIcon fontSize="small" />,
  Experience: <WorkHistoryIcon fontSize="small" />,
  Projects: <FolderIcon fontSize="small" />,
  Skills: <BuildIcon fontSize="small" />,
  Contact: <MailIcon fontSize="small" />,
};

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isTop, setIsTop] = useState(true);
  useEffect(() => {
    const handleScroll = () => {
      setIsTop(window.scrollY === 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const drawer = (
    <Box
      onClick={() => setMobileOpen((prevState) => !prevState)}
      sx={{
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        height: "100%",
      }}
    >
      <Typography variant={"h6"} sx={{ my: 2 }}>
        Dennis Byberg
      </Typography>
      <Divider />
      <List>
        {LINKS_DATA.map((link) => (
          <ListItem key={link.name} disablePadding>
            <ListItemButton href={link.hash}>
              <ListItemIcon sx={{ minWidth: 36 }}>
                {LINK_ICONS[link.name]}
              </ListItemIcon>
              <ListItemText primary={link.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Box sx={{ mt: "auto" }}>
        <Divider />
        <Typography
          variant="body2"
          sx={{ display: "block", textAlign: "center", py: 2, opacity: 0.4 }}
        >
          v{version}
        </Typography>
      </Box>
    </Box>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        component={motion.nav}
        initial={{ y: -200, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        sx={isTop ? HEADER_APP_BAR_STYLE_TOP : HEADER_APP_BAR_STYLE}
      >
        <Toolbar>
          <IconButton
            color={"inherit"}
            aria-label={"open drawer"}
            edge={"start"}
            onClick={() => setMobileOpen((prevState) => !prevState)}
            sx={{ mr: 2 }}
          >
            <MenuIcon sx={{ fontSize: 32 }} />
          </IconButton>
          <Box sx={{ flexGrow: 1 }} />
          <Tooltip title="Visitors" arrow>
            <Box sx={{ display: "flex", alignItems: "center", gap: 0.5, opacity: 0.7, cursor: "default" }}>
              <PeopleIcon fontSize="small" />
              <Typography variant="body2">100</Typography>
            </Box>
          </Tooltip>
        </Toolbar>
      </AppBar>
      <Box component={"nav"}>
        <Drawer
          variant={"temporary"}
          open={mobileOpen}
          onClose={() => setMobileOpen((prevState) => !prevState)}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: "block",
            "& .MuiDrawer-paper": { boxSizing: "border-box", width: 240 },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <ToTopButton />
    </Box>
  );
}

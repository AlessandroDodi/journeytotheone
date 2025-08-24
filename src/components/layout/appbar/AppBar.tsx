"use client";

import {
  AppBar,
  Toolbar,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useState } from "react";
import MobileMenuButton from "./MobileMenuButton";
import DesktopNavigation from "./DesktopNavigation";
import Logo from "../../general/Logo";
import MobileDrawer from "./MobileDrawer";

const mainNavigationItems = [
  { label: "Projects", href: "#projects" },
];

const ResponsiveAppBar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <>
      <AppBar
        position="absolute"
        sx={{
          boxShadow: "none",
          backgroundColor: "transparent",
          backgroundImage: "none",
        }}
      >
        <Toolbar sx={{ px: 4, justifyContent: "space-between" }}>
          <Logo variant="white" />

          {!isMobile && (
            <DesktopNavigation items={mainNavigationItems} />
          )}

          {isMobile && <MobileMenuButton onClick={handleDrawerToggle} />}
        </Toolbar>
      </AppBar>

      <MobileDrawer
        open={mobileOpen}
        onClose={handleDrawerToggle}
        navigationItems={mainNavigationItems}
      />
    </>
  );
};

export default ResponsiveAppBar;

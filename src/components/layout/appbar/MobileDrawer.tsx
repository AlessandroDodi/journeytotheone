"use client";

import {
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Button,
} from "@mui/material";
import { Close as CloseIcon } from "@mui/icons-material";
import Link from "next/link";
import AuthButtons from "./AuthButtons";
import Logo from "../../general/Logo";

type NavigationItem = {
  label: string;
  href: string;
};

interface MobileDrawerProps {
  open: boolean;
  onClose: () => void;
  navigationItems: NavigationItem[];
}

const MobileDrawer = ({
  open,
  onClose,
  navigationItems,
}: MobileDrawerProps) => {
  const drawer = (
    <Box sx={{ width: "100%", height: "100%", p: 3 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 4,
        }}
      >
        <Logo variant="white" />
        <IconButton onClick={onClose} sx={{ color: "white" }}>
          <CloseIcon />
        </IconButton>
      </Box>
      <List sx={{ px: 0 }}>
        {navigationItems.map((item) => (
          <ListItem
            key={item.label}
            component={Link}
            href={item.href}
            sx={{
              px: 0,
              py: 2,
              borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
            }}
          >
            <ListItemText
              primary={item.label}
              sx={{
                color: "text.primary",
              }}
            />
          </ListItem>
        ))}
      </List>
      <Box sx={{ mt: 4 }}>
        <Button
          component={Link}
          href="/auth/signup"
          variant="outlined"
          fullWidth
          color="info"
        >
          Join
        </Button>
      </Box>
    </Box>
  );

  return (
    <Drawer
      variant="temporary"
      anchor="top"
      open={open}
      onClose={onClose}
      ModalProps={{
        keepMounted: true,
      }}
      sx={{
        display: { xs: "block", lg: "none" },
        "& .MuiDrawer-paper": {
          boxSizing: "border-box",
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.85)",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
          backgroundImage: "none",
          color: "white",
        },
      }}
    >
      {drawer}
    </Drawer>
  );
};

export default MobileDrawer;

"use client";

import { IconButton } from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";

interface MobileMenuButtonProps {
  onClick: () => void;
}

const MobileMenuButton = ({ onClick }: MobileMenuButtonProps) => {
  return (
    <IconButton
      color="inherit"
      aria-label="open drawer"
      edge="end"
      onClick={onClick}
    >
      <MenuIcon />
    </IconButton>
  );
};

export default MobileMenuButton;
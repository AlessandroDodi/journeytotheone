"use client";

import { Box, Button } from "@mui/material";
import Link from "next/link";

type NavigationItem = {
  label: string;
  href: string;
};

interface DesktopNavigationProps {
  items: NavigationItem[];
}

const DesktopNavigation = ({ items }: DesktopNavigationProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        gap: 2,
        flex: 1,
        justifyContent: "center",
      }}
    >
      {items.map((item) => (
        <Button
          key={item.label}
          component={Link}
          href={item.href}
          sx={{
            color: "rgba(255, 255, 255, 0.7)",
            textTransform: "none",
            fontSize: "0.9rem",
            fontWeight: 400,
            "&:hover": {
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              color: "white",
            },
          }}
        >
          {item.label}
        </Button>
      ))}
    </Box>
  );
};

export default DesktopNavigation;
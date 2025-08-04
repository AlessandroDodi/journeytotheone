import { Button, Stack } from "@mui/material";
import Link from "next/link";

interface AuthButtonsProps {
  isMobile?: boolean;
}

const AuthButtons = ({ isMobile = false }: AuthButtonsProps) => {
  return (
    <Stack spacing={1} direction={isMobile ? "column" : "row"}>
      <Button
        component={Link}
        href="/auth/login"
        fullWidth={isMobile}
        color={isMobile ? "secondary" : "primary"}
        variant={isMobile ? "outlined" : "text"}
      >
        Log in
      </Button>
      <Button
        component={Link}
        href="/auth/signup"
        variant="outlined"
        fullWidth={isMobile}
        color="info"
      >
        Sign up
      </Button>
    </Stack>
  );
};

export default AuthButtons;

import { Box, Container, Typography, Stack, Link } from "@mui/material";
import NextLink from "next/link";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#000000",
        borderTop: "1px solid rgba(255, 255, 255, 0.1)",
        py: 4,
        mt: "auto",
      }}
    >
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: "column", md: "row" }}
          justifyContent="flex-end"
          alignItems="center"
          spacing={2}
        >
            <Link
              component={NextLink}
              href="/contact"
              color="rgba(255, 255, 255, 0.7)"
              sx={{
                textDecoration: "none",
                "&:hover": {
                  color: "white",
                },
              }}
            >
              Contact
            </Link>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;

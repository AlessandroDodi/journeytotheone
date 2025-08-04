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
          justifyContent="space-between"
          alignItems="center"
          spacing={2}
        >
          <Typography variant="body2" color="rgba(255, 255, 255, 0.7)">
            © {new Date().getFullYear()} SneakerDev. All rights reserved.
          </Typography>

          <Stack direction="row" spacing={3}>
            <Link
              component={NextLink}
              href="/legal/terms"
              color="rgba(255, 255, 255, 0.7)"
              sx={{
                textDecoration: "none",
                "&:hover": {
                  color: "white",
                },
              }}
            >
              Terms of Service
            </Link>
            <Link
              component={NextLink}
              href="/legal/privacy-policy"
              color="rgba(255, 255, 255, 0.7)"
              sx={{
                textDecoration: "none",
                "&:hover": {
                  color: "white",
                },
              }}
            >
              Privacy Policy
            </Link>
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
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;

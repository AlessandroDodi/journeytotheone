import { Box, Container, Stack } from "@mui/material";

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
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;

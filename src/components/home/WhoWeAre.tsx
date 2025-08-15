import { Box, Container, Typography, Stack } from "@mui/material";

const WhoWeAre = () => {
  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: "white",
      }}
    >
      <Container maxWidth="lg" sx={{ px: { xs: 3, sm: 4 } }}>
        <Stack spacing={{ xs: 6, md: 8 }} alignItems="center">
          <Typography
            sx={{
              fontSize: { xs: "2rem", sm: "2.5rem", md: "3.5rem" },
              fontWeight: 300,
              textAlign: "center",
              color: "#333",
              mb: 2,
              position: "relative",
              px: { xs: 2, sm: 0 },
            }}
          >
            who are &ldquo;we&rdquo;?
          </Typography>

          <Box sx={{ position: "relative", mb: { xs: 4, md: 8 }, width: "100%", maxWidth: "900px" }}>
            {/* Main content container */}
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
                gap: 6,
                alignItems: "center",
              }}
            >
                              {/* Image section */}
                <Box sx={{ position: "relative" }}>
                  <Box
                    sx={{
                      position: "relative",
                      width: "100%",
                      maxWidth: "400px",
                      margin: "0 auto",
                      borderRadius: "16px",
                      overflow: "hidden",
                      boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                      transform: "rotate(-2deg)",
                      transition: "transform 0.3s ease",
                      "&:hover": {
                        transform: "rotate(0deg) scale(1.02)",
                      },
                    }}
                  >
                    <Box
                      component="img"
                      src="/theseguysf_ck.avif"
                      alt="Pran and Alessandro"
                      sx={{
                        width: "100%",
                        height: "auto",
                        display: "block",
                      }}
                    />
                  </Box>
                </Box>

              {/* Text section */}
              <Box sx={{ textAlign: { xs: "center", md: "left" }, px: { xs: 2, sm: 0 } }}>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: { xs: "1rem", sm: "1.1rem", md: "1.2rem" },
                    lineHeight: 1.8,
                    color: "#555",
                    mb: 3,
                    fontFamily: "Inter, sans-serif",
                  }}
                >
                  we met during our senior uni year and we built our first project together that won the Major League Hackathon (by Drexel) that very spring.
                </Typography>
                
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: { xs: "1rem", sm: "1.1rem", md: "1.2rem" },
                    lineHeight: 1.8,
                    color: "#555",
                    fontFamily: "Inter, sans-serif",
                  }}
                >
                  we knew we were a great fit, but life got in the way. 4 years later we reconnected not far from our campus and decided to build stuff. as much as we can and as best as we can.
                </Typography>
              </Box>
            </Box>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default WhoWeAre;

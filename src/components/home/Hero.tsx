import { Stack, Typography, Container, TextField, Button } from "@mui/material";
import Image from "next/image";
import gradient from "/public/gradient.png";

const Hero = () => {
  return (
    <Stack
      component="section"
      height="100vh"
      position="relative"
      overflow="hidden"
      justifyContent="center"
      alignItems="center"
    >
      {/* Background with stars */}
      <Stack
        position="absolute"
        width="100%"
        height="100%"
        zIndex={-2}
        sx={{ background: "linear-gradient(180deg, #000000 0%, #0A1128 100%)" }}
      />

      {/* Clouds image */}
      <Image
        src={gradient}
        alt="Clouds"
        fill
        style={{
          objectFit: "cover",
          objectPosition: "bottom",
          zIndex: -1,
          opacity: 0.9,
          position: "absolute",
          bottom: 0,
        }}
        priority
      />

      {/* Gradient overlay for smooth transition to next section */}
      <Stack
        position="absolute"
        width="100%"
        height="200px"
        bottom={0}
        zIndex={0}
        sx={{ 
          background: "linear-gradient(to bottom, transparent 0%, rgba(255,255,255,0.1) 70%, rgba(255,255,255,0.3) 90%, white 100%)",
          pointerEvents: "none",
        }}
      />

      <Container maxWidth="sm" sx={{ px: { xs: 3, sm: 4 } }}>
        <Stack spacing={4} alignItems="center" textAlign="center">
          <Typography 
            variant="h1"
            sx={{
              fontSize: { xs: "2.5rem", sm: "3rem", md: "3.5rem" },
              lineHeight: { xs: 1.2, md: 1.1 },
            }}
          >
            journey to <strong>the one</strong>
          </Typography>

          <Typography
            variant="subtitle1"
            sx={{ 
              color: "rgba(255, 255, 255, 0.8)",
              fontSize: { xs: "1rem", sm: "1.1rem" },
              px: { xs: 2, sm: 0 },
            }}
          >
            we're on the hunt for <strong>the one</strong> product—and we'll share
            every hack, failure, and victory. follow along at
            journeytotheone.com.
          </Typography>
        </Stack>
      </Container>
      <Stack 
        direction={{ xs: "column", sm: "row" }} 
        spacing={2} 
        width={{ xs: "90%", sm: 400 }}
        maxWidth="400px"
        mt={6}
        px={{ xs: 2, sm: 0 }}
      >
        <TextField type="email" placeholder="enter your email" fullWidth />
        <Button 
          variant="outlined" 
          color="info"
          sx={{ 
            minWidth: { xs: "100%", sm: "auto" },
            py: { xs: 1.5, sm: "auto" },
          }}
        >
          Join
        </Button>
      </Stack>
    </Stack>
  );
};

export default Hero;

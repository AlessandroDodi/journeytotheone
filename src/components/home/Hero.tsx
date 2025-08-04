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

      <Container maxWidth="sm">
        <Stack spacing={4} alignItems="center" textAlign="center">
          <Typography variant="h1">journey to the one</Typography>
          <Typography
            variant="subtitle1"
            sx={{ color: "rgba(255, 255, 255, 0.8)" }}
          >
            We're on the hunt for The One product—and we'll share every hack,
            failure, and victory. Follow along at journeytotheone.com.
          </Typography>
        </Stack>
      </Container>
      <Stack direction={"row"} spacing={2} width={400} mt={6}>
        <TextField type="email" placeholder="enter your email" fullWidth />
        <Button variant="outlined" color="info">
          Join
        </Button>
      </Stack>
    </Stack>
  );
};

export default Hero;

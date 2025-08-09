import { Box, Stack } from "@mui/material";
import ScrollReveal from "../animations/ScrollReveal";

export default function TextRevealSection() {
  return (
    <Stack
      sx={{
        background: "linear-gradient(to bottom, white, #dddde8, white)",
        py: { xs: 8, md: 12 },
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          maxWidth: "md",
          pY: 6,
          px: { xs: 3, sm: 4, md: 0 },
        }}
      >
        <ScrollReveal
          baseOpacity={0.05}
          enableBlur={true}
          baseRotation={0}
          blurStrength={8}
          wordAnimationEnd="bottom center"
        >
          "all we have to decide is what to do with the time that is given us." we're building & shipping a product a month. maybe even several, depends on the month. because in this game, speed beats perfection every single time.
        </ScrollReveal>
      </Box>
    </Stack>
  );
}

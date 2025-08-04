import { Box, Stack } from "@mui/material";
import ScrollReveal from "../animations/ScrollReveal";

export default function TextRevealSection() {
  return (
    <Stack
      sx={{
        background: "linear-gradient(to bottom, #dddde8, white)",
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
        }}
      >
        <ScrollReveal
          baseOpacity={0.1}
          enableBlur={true}
          baseRotation={0}
          blurStrength={10}
        >
          Every journey begins with a single step. The path to greatness is not
          measured by the destination, but by the courage to begin and the
          persistence to continue when the road gets difficult.
        </ScrollReveal>
      </Box>

      <Box
        sx={{
          maxWidth: "md",
          mt: 16,
        }}
      >
        <ScrollReveal
          baseOpacity={0.1}
          enableBlur={true}
          baseRotation={0}
          blurStrength={10}
        >
          Every journey begins with a single step. The path to greatness is not
          measured by the destination, but by the courage to begin and the
          persistence to continue when the road gets difficult.
        </ScrollReveal>
      </Box>
    </Stack>
  );
}

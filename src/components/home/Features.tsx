import { Stack, Typography, Container, Grid, Box } from "@mui/material";

interface FeatureItem {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

interface FeaturesProps {
  title: string;
  items: FeatureItem[];
}

const Features = ({ title, items }: FeaturesProps) => {
  return (
    <Stack component="section" py={8}>
      <Container maxWidth="lg">
        <Stack spacing={6}>
          <Typography variant="h2" color="white" mb={2}>
            {title}
          </Typography>

          <Grid container spacing={4}>
            {items.map((item, index) => (
              <Grid size={{ xs: 12, md: 6 }} key={index}>
                <Stack spacing={3}>
                  {item.icon && (
                    <Box color="white" sx={{ fontSize: 40 }}>
                      {item.icon}
                    </Box>
                  )}
                  <Typography
                    variant="h6"
                    component="h3"
                    color="white"
                    fontWeight={500}
                  >
                    {item.title}
                  </Typography>
                  <Typography color="rgba(255, 255, 255, 0.7)" lineHeight={1.6}>
                    {item.description}
                  </Typography>
                </Stack>
              </Grid>
            ))}
          </Grid>
        </Stack>
      </Container>
    </Stack>
  );
};

export default Features;

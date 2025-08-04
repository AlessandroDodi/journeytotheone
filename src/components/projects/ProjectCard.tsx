import { Box, Card, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import DetailsButton from "../general/DetailsButton";

interface ProjectCardProps {
  name: string;
  image: string;
  onClick?: () => void;
}

const CardContainer = styled(Card)(() => ({
  position: "relative",
  borderRadius: "22px",
  overflow: "hidden",
  height: 700,
  width: "100%",
  cursor: "pointer",
  transition: "transform 0.3s ease",
  "&:hover": {
    transform: "scale(0.985)",
  },
}));

const CardImage = styled(Box)({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundSize: "cover",
  backgroundPosition: "center",
  zIndex: 1,
});

const GradientOverlay = styled(Box)({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  background:
    "linear-gradient(to bottom, rgba(0,0,0,0) 60%, rgba(0,0,0,0.9) 100%)",
  zIndex: 2,
});

const ContentContainer = styled(Box)(({ theme }) => ({
  position: "absolute",
  bottom: 0,
  left: 0,
  width: "100%",
  padding: theme.spacing(2),
  zIndex: 3,
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(0.5),
}));

export default function ProjectCard({
  name,
  image,
  onClick,
}: ProjectCardProps) {
  return (
    <CardContainer onClick={onClick}>
      <CardImage sx={{ backgroundImage: `url(${image})` }} />
      <GradientOverlay />
      <ContentContainer>
        <Typography variant="h5" component="h2" color="white">
          {name}
        </Typography>
      </ContentContainer>
      <DetailsButton onClick={onClick} />
    </CardContainer>
  );
}

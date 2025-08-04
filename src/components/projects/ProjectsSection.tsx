"use client";

import { Box, Container, Typography, Grid } from "@mui/material";
import ProjectCard from "./ProjectCard";

const projectsData = [
  {
    name: "Perplexigrid",
    image: "/projects/perplexigrid.png", // You'll need to add these images to public/projects/
    description: "Advanced grid-based data visualization platform",
  },
  {
    name: "Mapora",
    image: "/projects/mapora.png",
    description: "Interactive mapping and location intelligence solution",
  },
  {
    name: "Crevia",
    image: "/projects/crevia.png",
    description: "Creative content management and collaboration tool",
  },
];

const ProjectsSection = () => {
  const handleProjectClick = (projectName: string) => {
    console.log(`Clicked on ${projectName}`);
    // Add your navigation logic here
  };

  return (
    <Box
      sx={{
        py: { xs: 8, md: 20 },
        backgroundColor: "white",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center", mb: 8 }}>
          <Typography
            sx={{
              fontSize: "50px",
              fontWeight: 400,
              background:
                "linear-gradient(180deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.5) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              lineHeight: 1.3,
            }}
          >
            Our Projects
          </Typography>
          <Typography variant="subtitle1" color="secondary">
            Explore our innovative solutions that push the boundaries of
            technology and creativity
          </Typography>
        </Box>

        <Grid container spacing={4} justifyContent="center">
          {projectsData.map((project) => (
            <Grid size={12} key={project.name}>
              <ProjectCard
                name={project.name}
                image={project.image}
                onClick={() => handleProjectClick(project.name)}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default ProjectsSection;

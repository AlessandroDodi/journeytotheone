"use client";

import { Box, Container, Typography } from "@mui/material";
import ProjectCard from "./ProjectCard";

const projectsData = [
  {
    name: "Perplexigrid",
    image: "/projects/perplexigrid.png",
    description: "Advanced grid-based data visualization platform",
    link: "https://www.perplexigrid.com",
  },
  {
    name: "Mapora",
    image: "/projects/mapora.png",
    description: "Interactive mapping and location intelligence solution",
    link: "https://www.getmapora.com",
  },
  {
    name: "Crevia",
    image: "/projects/crevia.png",
    description: "Creative content management and collaboration tool",
    link: "https://www.getcrevia.com",
  },
];

const ProjectsSection = () => {
  const handleProjectClick = (link: string) => {
    window.open(link, '_blank', 'noopener,noreferrer');
  };

  return (
    <Box
      sx={{
        py: { xs: 8, md: 20 },
        backgroundColor: "white",
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

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              md: "repeat(2, 1fr)",
            },
            gap: 4,
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          {projectsData.map((project) => (
            <Box key={project.name} sx={{ width: "100%" }}>
              <ProjectCard
                name={project.name}
                image={project.image}
                onClick={() => handleProjectClick(project.link)}
              />
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default ProjectsSection;

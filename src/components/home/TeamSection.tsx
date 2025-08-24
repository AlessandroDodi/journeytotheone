"use client";

import { Box, Typography, Avatar, Link, Container } from "@mui/material";
import { motion } from "framer-motion";
import { GitHub } from "@mui/icons-material";

interface TeamMember {
  name: string;
  role: string;
  description: string;
  github: string;
  avatar: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Peter",
    role: "Full-Stack & AI Dev",
    description: "ex & future founder shipping AI platforms for global clients. won international hackathons, bootstrapped a startup from scratch. built AI & analytics products at scale in corporate america.",
    github: "petarran",
    avatar: "/avatar/peter.avif"
  },
  {
    name: "Alessandro",
    role: "Software Developer | ex-founder (partial exit)",
    description: "5+ years building web & mobile apps. won international hackathons, co-founded Webion, delivered 40+ projects across industries. cum laude in computer science in 2.5 years.",
    github: "alessandroDodi",
    avatar: "/avatar/ale.avif"
  }
];

const TeamSection = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <Typography
          variant="h3"
          component="h2"
          textAlign="center"
          color="white"
          sx={{ mb: 6, fontWeight: 600 }}
        >
          a bit more about us
        </Typography>
        
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
            gap: 4,
            mt: 4
          }}
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  p: 4,
                  borderRadius: 3,
                  background: "rgba(255, 255, 255, 0.05)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    background: "rgba(255, 255, 255, 0.08)",
                    border: "1px solid rgba(255, 255, 255, 0.2)",
                    transform: "translateY(-4px)"
                  }
                }}
              >
                <Avatar
                  src={member.avatar}
                  alt={member.name}
                  sx={{
                    width: 80,
                    height: 80,
                    mb: 3,
                    border: "3px solid rgba(255, 255, 255, 0.2)"
                  }}
                />
                
                <Typography
                  variant="h5"
                  component="h3"
                  color="white"
                  sx={{ mb: 1, fontWeight: 600 }}
                >
                  {member.name}
                </Typography>
                
                <Typography
                  variant="body1"
                  color="primary.main"
                  sx={{ mb: 2, fontWeight: 500 }}
                >
                  {member.role}
                </Typography>
                
                <Typography
                  variant="body2"
                  color="rgba(255, 255, 255, 0.8)"
                  sx={{ mb: 3, lineHeight: 1.6 }}
                >
                  {member.description}
                </Typography>
                
                <Link
                  href={`https://github.com/${member.github}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    color: "primary.main",
                    textDecoration: "none",
                    transition: "all 0.2s ease",
                    "&:hover": {
                      color: "primary.light",
                      transform: "translateY(-1px)"
                    }
                  }}
                >
                  <GitHub sx={{ fontSize: 20 }} />
                  <span>@{member.github}</span>
                </Link>
                
                {member.name === "Ale" && (
                  <Link
                    href="https://dodi.framer.website/"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      mt: 2,
                      color: "rgba(255, 255, 255, 0.7)",
                      textDecoration: "none",
                      fontSize: "0.875rem",
                      transition: "color 0.2s ease",
                      "&:hover": {
                        color: "white"
                      }
                    }}
                  >
                    Personal Website →
                  </Link>
                )}
              </Box>
            </motion.div>
          ))}
        </Box>
      </motion.div>
    </Container>
  );
};

export default TeamSection;

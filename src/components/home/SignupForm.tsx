"use client";

import { useState } from "react";
import { TextField, Button, Box, Typography, CircularProgress } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, Mail } from "@mui/icons-material";
import toast from "react-hot-toast";

interface SignupFormProps {
  project?: string;
  referrer?: string;
}

const SignupForm = ({ project = "jtt1", referrer }: SignupFormProps) => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!email.trim()) {
      setError("Please enter your email");
      return;
    }

    if (!validateEmail(email)) {
      setError("Please enter a valid email address");
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch("/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email.trim(),
          project,
          referrer,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setIsSubmitted(true);
        toast.success("Welcome aboard! We'll keep you updated.");
      } else {
        if (response.status === 409) {
          setError("This email is already registered");
        } else {
          setError(data.error || "Something went wrong. Please try again.");
        }
      }
    } catch {
      setError("Network error. Please check your connection.");
    } finally {
      setIsLoading(false);
    }
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 2,
            p: 3,
            borderRadius: 3,
            background: "rgba(255, 255, 255, 0.1)",
            backdropFilter: "blur(10px)",
            border: "1px solid rgba(255, 255, 255, 0.2)",
          }}
        >
          <CheckCircle
            sx={{
              fontSize: 48,
              color: "success.main",
              filter: "drop-shadow(0 0 20px rgba(76, 175, 80, 0.5))",
            }}
          />
          <Typography variant="h6" color="white" textAlign="center">
            You&apos;re all set! 🎉
          </Typography>
          <Typography variant="body2" color="rgba(255, 255, 255, 0.8)" textAlign="center">
            We&apos;ll send you updates about our journey to the one.
          </Typography>
        </Box>
      </motion.div>
    );
  }

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      style={{ width: "100%" }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          gap: 2,
          width: "100%",
          maxWidth: 400,
        }}
      >
        <TextField
          type="email"
          placeholder="enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          error={!!error}
          helperText={error}
          disabled={isLoading}
          sx={{
            flex: 1,
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: error ? "error.main" : "rgba(255, 255, 255, 0.2)",
              },
              "&:hover fieldset": {
                borderColor: error ? "error.main" : "rgba(255, 255, 255, 0.3)",
              },
            },
          }}
        />
        <Button
          type="submit"
          variant="outlined"
          color="info"
          disabled={isLoading || !email.trim()}
          sx={{
            minWidth: { xs: "100%", sm: "auto" },
            py: { xs: 1.5, sm: "auto" },
            px: 3,
            position: "relative",
            overflow: "hidden",
            "&:disabled": {
              opacity: 0.6,
            },
          }}
        >
          <AnimatePresence mode="wait">
            {isLoading ? (
              <motion.div
                key="loading"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.2 }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                }}
              >
                <CircularProgress size={16} color="inherit" />
                <span>Joining...</span>
              </motion.div>
            ) : (
              <motion.div
                key="button"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                }}
              >
                <Mail sx={{ fontSize: 18 }} />
                <span>Join</span>
              </motion.div>
            )}
          </AnimatePresence>
        </Button>
      </Box>
    </motion.form>
  );
};

export default SignupForm;

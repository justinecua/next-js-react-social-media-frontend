"use client";

import { useRouter } from "next/navigation";
import { Box, Container, Typography } from "@mui/material";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { useTheme } from "@mui/material/styles";
import Image from "next/image";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";

import "swiper/css";
import "swiper/css/navigation";

export default function About() {
  const theme = useTheme();
  const router = useRouter();

  const goBackRoute = () => {
    router.push("/");
  };

  return (
    <Box sx={{ height: "100vh" }}>
      <Box sx={{ display: "flex", height: "100vh" }}>
        <Box
          sx={{
            height: "100%",
            padding: 2,
            display: { xs: "none", md: "flex" },
            justifyContent: "center",
            position: "fixed",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <Box sx={{ marginBottom: 3 }}>
              <Image src="/favicon.ico" alt="App Logo" width={46} height={46} />
            </Box>
            <Box>
              <ThemeToggle />
            </Box>
          </Box>
        </Box>

        <Container maxWidth="sm">
          <Box
            sx={{
              display: "flex",
              width: "100%",
              fontWeight: 600,
              padding: 1,
              marginBottom: 2,
              bgcolor: "background.paper",
              borderRadius: 2,
              border: theme.palette.custom.postBorder,
              boxShadow: "0 0 2px rgba(0, 0, 0, 0.1)",
              fontSize: 15,
            }}
          >
            <ArrowCircleLeftIcon
              onClick={goBackRoute}
              sx={{ cursor: "pointer" }}
            />
            <Typography
              onClick={goBackRoute}
              sx={{
                marginLeft: 1.2,
                color: theme.palette.primary,
                cursor: "pointer",
              }}
            >
              Go back
            </Typography>
          </Box>
          <Box>
            <Typography
              variant="h6"
              sx={{
                color: theme.palette.custom.skyBlue,
                fontWeight: 600,
                padding: 1,
                marginBottom: 2,
                bgcolor: "background.paper",
                borderRadius: 2,
                border: theme.palette.custom.postBorder,
                boxShadow: "0 0 2px rgba(0, 0, 0, 0.1)",
                fontSize: 16,
              }}
            >
              What is Glow?
            </Typography>
            <Typography
              sx={{
                padding: 3,
                marginBottom: 2,

                borderRadius: 2,
                border: theme.palette.custom.postBorder,
                boxShadow: "0 0 2px rgba(0, 0, 0, 0.1)",
                fontSize: 14,
                marginTop: -0.3,
                color: theme.palette.secondary,
              }}
            >
              Glow is a social platform built to help people connect, share, and
              have fun. It’s a place where you can be yourself, meet new people,
              and engage with content that matters to you. Whether you're
              posting, commenting, or discovering new interests, Glow keeps
              things real and simple
            </Typography>

            <Typography
              variant="h6"
              sx={{
                color: theme.palette.custom.skyBlue,
                fontWeight: 600,
                padding: 1,
                marginBottom: 2,
                bgcolor: "background.paper",
                borderRadius: 2,
                border: theme.palette.custom.postBorder,
                boxShadow: "0 0 2px rgba(0, 0, 0, 0.1)",
                fontSize: 15,
                marginTop: -0.3,
              }}
            >
              Why build something like this?
            </Typography>
            <Typography
              sx={{
                padding: 3,
                marginBottom: 2,
                borderRadius: 2,
                border: theme.palette.custom.postBorder,
                boxShadow: "0 0 2px rgba(0, 0, 0, 0.1)",
                fontSize: 15,
                marginTop: -0.3,
                color: theme.palette.secondary,
              }}
            >
              The main reason I built this wasn’t to compete with big social
              media sites—it was to see if I could actually pull it off. I
              wanted something real, where people could connect, share, and have
              fun. No gimmicks, no pressure—just a space to be yourself and meet
              new people. It’s all about making connections, not just endlessly
              scrolling through feeds. Almost a year in, and it's still going
              strong
            </Typography>
            <Typography
              sx={{
                padding: 3,
                marginBottom: 2,
                borderRadius: 2,
                border: theme.palette.custom.postBorder,
                boxShadow: "0 0 2px rgba(0, 0, 0, 0.1)",
                fontSize: 15,
                marginTop: -0.3,
                color: theme.palette.secondary,
              }}
            >
              So just follow your favorite people and never miss out on the
              action. Glow’s all about making connections, sharing what matters
              to you, and finding others who vibe with you.
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: theme.palette.custom.skyBlue,
                fontWeight: 600,
                padding: 1,
                marginBottom: 2,
                borderRadius: 2,
                border: theme.palette.custom.postBorder,
                boxShadow: "0 0 2px rgba(0, 0, 0, 0.1)",
                fontSize: 15,
                marginTop: -0.3,
                bgcolor: "background.paper",
              }}
            >
              Main Features
            </Typography>
            <Typography
              sx={{
                padding: 3,
                marginBottom: 2,
                borderRadius: 2,
                border: theme.palette.custom.postBorder,
                boxShadow: "0 0 2px rgba(0, 0, 0, 0.1)",
                fontSize: 15,
                marginTop: -0.3,
                color: theme.palette.secondary,
              }}
            >
              Engage with posts by creating, liking, unliking, and commenting.
              It’s all about interactions, so you can always be in the loop.
            </Typography>
            <Typography
              sx={{
                padding: 3,
                marginBottom: 2,
                borderRadius: 2,
                border: theme.palette.custom.postBorder,
                boxShadow: "0 0 2px rgba(0, 0, 0, 0.1)",
                fontSize: 15,
                marginTop: -0.3,
                color: theme.palette.secondary,
              }}
            >
              Customize your profile with your own profile picture and cover
              photo. Make it yours and show off who you are.
            </Typography>
            <Typography
              sx={{
                padding: 3,
                marginBottom: 2,
                borderRadius: 2,
                border: theme.palette.custom.postBorder,
                boxShadow: "0 0 2px rgba(0, 0, 0, 0.1)",
                fontSize: 15,
                marginTop: -0.3,
                color: theme.palette.secondary,
              }}
            >
              Emojis are your new best friend. Add a little extra to your posts
              and comments with a wide range of emojis that make every
              interaction more fun.
            </Typography>
            <Typography
              sx={{
                padding: 3,
                marginBottom: 2,
                borderRadius: 2,
                border: theme.palette.custom.postBorder,
                boxShadow: "0 0 2px rgba(0, 0, 0, 0.1)",
                fontSize: 15,
                marginTop: -0.3,
                color: theme.palette.secondary,
              }}
            >
              Hashtags help organize content and make it easier to find what
              you're into. Whether it’s a trending topic or something niche,
              hashtags make discovery simple. Add friends and grow your social
              circle.
            </Typography>
            <Typography
              sx={{
                padding: 3,
                marginBottom: 2,
                borderRadius: 2,
                border: theme.palette.custom.postBorder,
                boxShadow: "0 0 2px rgba(0, 0, 0, 0.1)",
                fontSize: 15,
                marginTop: -0.3,
                color: theme.palette.secondary,
              }}
            >
              Send requests, accept them, and watch your community grow as you
              connect with new people. Stay updated with notifications for
              likes, comments, and friend requests. You won’t miss anything
              important.
            </Typography>
            <Typography
              sx={{
                padding: 3,
                marginBottom: 2,
                borderRadius: 2,
                border: theme.palette.custom.postBorder,
                boxShadow: "0 0 2px rgba(0, 0, 0, 0.1)",
                fontSize: 15,
                marginTop: -0.3,
                color: theme.palette.secondary,
              }}
            >
              Search for posts, accounts, or hashtags with ease. If you’re
              looking for something specific, it’s just a search away.
            </Typography>
            <Typography
              sx={{
                padding: 3,
                marginBottom: 2,
                borderRadius: 2,
                border: theme.palette.custom.postBorder,
                boxShadow: "0 0 2px rgba(0, 0, 0, 0.1)",
                fontSize: 15,
                marginTop: -0.3,
                color: theme.palette.secondary,
              }}
            >
              Switch between dark and light mode depending on your mood or the
              time of day. Glow lets you pick the mode that’s most comfortable
              for you.
            </Typography>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}

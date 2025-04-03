"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import {
  Box,
  Container,
  Button,
  CircularProgress,
  Typography,
  Modal,
} from "@mui/material";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { useTheme } from "@mui/material/styles";
import Image from "next/image";
import {
  useNewUsersQuery,
  useGetPostsQuery,
} from "@/@core/redux/slices/accounts/api";
import { Grid } from "@mui/material";
import Tooltip from "@mui/material/Tooltip";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { keyframes } from "@mui/system";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import ShareIcon from "@mui/icons-material/Share";

export default function Home() {
  const theme = useTheme();
  const router = useRouter();

  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [clickedPosts, setClickedPosts] = useState<{ [key: string]: boolean }>(
    {}
  );

  const handleAboutClick = () => {
    router.push("/about");
  };

  const goToLoginPage = () => {
    router.push("/accounts/login");
  };

  const handleClick = (postId: string) => {
    setClickedPosts((prevState) => ({
      ...prevState,
      [postId]: !prevState[postId],
    }));
  };
  const {
    data: users,
    error: userError,
    isLoading: isLoadingUsers,
  } = useNewUsersQuery();
  const {
    data: posts,
    error: postError,
    isLoading: isLoadingPosts,
  } = useGetPostsQuery();

  const buttonStyles = useMemo(
    () => ({
      bgcolor: theme.palette.primary.main,
      color: theme.palette.getContrastText(theme.palette.primary.main),
      textTransform: "none",
      transition: "background-color 0.1s ease, color 0.1s ease",
      padding: 1.2,
      fontWeight: 600,
      fontSize: 12.5,
      marginTop: 1,
      width: "100%",
    }),
    [theme.palette.primary.main]
  );

  const heartbeat = keyframes`
    0% {
      transform: scale(1);
    }
    25% {
      transform: scale(1.2); /* Scale up */
    }
    50% {
      transform: scale(1); /* Return to normal size */
    }
    75% {
      transform: scale(1.1); /* Slightly scale down */
    }
    100% {
      transform: scale(1); /* Return to normal size */
    }
  `;

  return (
    <Box sx={{ height: "100vh" }}>
      <Box sx={{ display: "flex", height: "100vh" }}>
        <Box
          sx={{
            height: "100%",
            width: "auto",
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

        {/* Main Content */}
        <Container maxWidth="sm">
          <Box
            padding={1}
            sx={{
              color: "text.primary",
            }}
          >
            {isLoadingPosts ? (
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {" "}
                <CircularProgress
                  sx={{
                    color: theme.palette.custom.subtitle,
                  }}
                  size={24}
                />
              </Box>
            ) : postError ? (
              <Typography color="error">Failed to load posts</Typography>
            ) : (
              <Box sx={{ marginTop: 2 }}>
                {posts?.map((post, index) => (
                  <Box
                    key={post?.id || `post-${index}`}
                    sx={{
                      padding: 3,
                      marginBottom: 2,
                      bgcolor: "background.paper",
                      borderRadius: 2,
                      border: theme.palette.custom.postBorder,
                      boxShadow: "0 0 2px rgba(0, 0, 0, 0.1)",
                    }}
                  >
                    <Box sx={{ width: "100%", display: "flex" }}>
                      <Tooltip title={post?.username} placement="left" arrow>
                        <Box
                          sx={{
                            width: 39,
                            height: 39,
                            borderRadius: "50%",
                            overflow: "hidden",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <img
                            src={
                              post?.profile_photo &&
                              post.profile_photo.trim() !== ""
                                ? post.profile_photo
                                : "/images/no_profile.png"
                            }
                            alt={post?.username || "User"}
                            style={{
                              width: "100%",
                              height: "100%",
                              objectFit: "cover",
                              cursor: "pointer",
                            }}
                            onError={(e) => {
                              const img = e.currentTarget;
                              if (
                                post?.username.includes("https://glowph.tech")
                              ) {
                                img.src = "/images/glowph_default.png";
                              } else {
                                img.src = "/images/no_profile.png";
                              }
                            }}
                          />
                        </Box>
                      </Tooltip>

                      <Box sx={{ marginLeft: 1 }}>
                        <Box sx={{ display: "flex" }}>
                          <Typography
                            sx={{
                              fontWeight: 600,
                              fontSize: 14,
                            }}
                          >
                            {post?.firstname}&nbsp;
                          </Typography>
                          <Typography
                            sx={{
                              fontSize: 12,
                            }}
                          >
                            {post?.dateTime}
                          </Typography>
                        </Box>
                        <Typography
                          sx={{
                            fontSize: 13,
                            marginTop: -0.3,
                            color: theme.palette.custom.subtitle,
                          }}
                        >
                          @{post?.username}
                        </Typography>
                      </Box>
                    </Box>

                    <Typography
                      sx={{
                        fontSize: 14,
                        color: "text.secondary",
                        marginTop: 2,
                        marginBottom: 1,
                      }}
                    >
                      {post?.caption}
                    </Typography>
                    <Box
                      sx={{
                        display: "flex",
                        gap: 1,
                        flexWrap: "wrap",
                        marginTop: 1,
                      }}
                    >
                      <Swiper
                        spaceBetween={10}
                        slidesPerView={1}
                        style={{ maxWidth: "100%", borderRadius: 8 }}
                      >
                        {post?.photos?.map((photo, photoIndex) => (
                          <SwiperSlide key={`photo-${post.id}-${photoIndex}`}>
                            <Box
                              sx={{
                                width: "100%",
                                height: "auto", // remove maxWidth and maxHeight
                                borderRadius: 2,
                                overflow: "hidden",
                                position: "relative",
                                marginBottom: 2,
                              }}
                              onClick={() => setSelectedImage(photo)}
                            >
                              <img
                                src={photo}
                                alt={`Post Image ${photoIndex + 1}`}
                                style={{
                                  width: "100%",
                                  height: "100%",
                                  maxHeight: 500,
                                  objectFit: "cover",
                                  borderRadius: "8px",
                                  cursor: "pointer",
                                }}
                              />

                              {photoIndex === 0 && post?.photos?.length > 1 && (
                                <Box
                                  sx={{
                                    position: "absolute",
                                    bottom: 10,
                                    right: 10,
                                    bgcolor: "rgba(0,0,0,0.6)",
                                    color: "white",
                                    padding: "4px 8px",
                                    borderRadius: "8px",
                                    fontSize: 12,
                                    fontWeight: 600,
                                  }}
                                >
                                  +{post.photos.length - 1} more
                                </Box>
                              )}
                            </Box>
                          </SwiperSlide>
                        ))}
                      </Swiper>
                    </Box>
                    <Box
                      sx={{
                        marginTop: 0.7,
                        justifyContent: "start",
                        alignItems: "center",
                        display: "flex",
                      }}
                    >
                      {/* Heart */}
                      <Tooltip title={"Heart"} placement="top" arrow>
                        <Box
                          onClick={() => handleClick(post.id)}
                          sx={{ marginRight: 5 }}
                        >
                          {clickedPosts[post.id] ? (
                            <FavoriteIcon
                              sx={{
                                cursor: "pointer",
                                color: "#1485ff",
                                animation: `${heartbeat} 0.5s ease-in-out`,
                                transition: "color 0.1s ease",
                              }}
                            />
                          ) : (
                            <FavoriteBorderOutlinedIcon
                              sx={{
                                cursor: "pointer",
                                color: theme.palette.custom.subtitle,
                                transition: "color 0.1s ease",
                              }}
                            />
                          )}
                        </Box>
                      </Tooltip>
                      {/* Comment */}
                      <Tooltip title={"Comment"} placement="top" arrow>
                        <Box sx={{ marginRight: 5 }}>
                          <ChatBubbleOutlineIcon
                            sx={{
                              cursor: "pointer",
                              color: theme.palette.custom.subtitle,
                              transition: "color 0.1s ease",
                              fontSize: 22,
                            }}
                          />
                        </Box>
                      </Tooltip>
                      {/* Share */}
                      <Tooltip title={"Share"} placement="top" arrow>
                        <Box sx={{ marginRight: 5 }}>
                          <ShareIcon
                            sx={{
                              cursor: "pointer",
                              color: theme.palette.custom.subtitle,
                              transition: "color 0.1s ease",
                              fontSize: 22,
                            }}
                          />
                        </Box>
                      </Tooltip>
                    </Box>
                  </Box>
                ))}
              </Box>
            )}
          </Box>
        </Container>

        {/* Full Image Viewer Modal */}
        <Modal
          open={!!selectedImage}
          onClose={() => setSelectedImage(null)}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backdropFilter: "blur(10px)",
          }}
        >
          <Box
            sx={{
              width: "40%",
              maxWidth: "80vw",
              maxHeight: "90vh",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              outline: "none",
              border: "none",
              objectFit: "scale-down",
            }}
          >
            {selectedImage && <img src={selectedImage} style={{}} />}
          </Box>
        </Modal>

        {/* Sidebar */}
        <Box
          sx={{
            height: "100%",
            width: { md: 300, lg: 340 },
            padding: 4,
            display: { xs: "none", md: "block" },
            bgcolor: "background.paper",
            position: "fixed",
            right: 0,
            flexShrink: 0,
          }}
        >
          <Box
            sx={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <Box>
              <Typography
                sx={{
                  fontWeight: 700,
                  fontSize: 18,
                  marginBottom: 0.7,
                  color: theme.palette.custom.fontColor,
                }}
              >
                First time here? 👋
              </Typography>
              <Typography
                sx={{
                  fontSize: 14,
                  lineHeight: 1.3,
                  marginBottom: 0.7,
                  color: theme.palette.custom.subtitle,
                }}
              >
                Sign up right now to create your own profile and join the
                community
              </Typography>

              <Button sx={buttonStyles}>Sign up with Email</Button>

              <Box sx={{ marginTop: 1, display: "flex" }}>
                <Typography
                  sx={{
                    fontSize: 14,
                    color: theme.palette.custom.subtitle,
                    marginRight: 1,
                  }}
                >
                  Already have an account?
                </Typography>
                <Typography
                  sx={{
                    fontSize: 14,
                    color: theme.palette.custom.skyBlue,
                    fontWeight: 600,
                  }}
                  onClick={goToLoginPage}
                >
                  Login
                </Typography>
              </Box>

              {/* Users Section */}
              <Box
                sx={{
                  marginTop: 4,
                  bgcolor: "background.paper",
                  color: "text.primary",
                }}
              >
                <Typography
                  sx={{ fontSize: 18, marginBottom: 2, fontWeight: 700 }}
                >
                  New on Glow
                </Typography>

                {isLoadingUsers ? (
                  <CircularProgress />
                ) : userError ? (
                  <Typography color="error">Failed to load users</Typography>
                ) : (
                  <Grid container spacing={2.1}>
                    {users?.map((user, index) => (
                      <Grid
                        item
                        xs={4}
                        sm={3}
                        md={2}
                        key={user?.id || `user-${index}`}
                      >
                        <Tooltip title={user?.username} placement="top" arrow>
                          <Box
                            sx={{
                              width: 37,
                              height: 37,
                              borderRadius: "50%",
                              overflow: "hidden",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                            }}
                          >
                            <img
                              src={
                                user?.profile_photo &&
                                user.profile_photo.trim() !== ""
                                  ? user.profile_photo
                                  : "/images/no_profile.png"
                              }
                              alt={user?.username || "User"}
                              style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                              }}
                              onError={(e) => {
                                const img = e.currentTarget;
                                if (
                                  user?.username.includes("https://glowph.tech")
                                ) {
                                  img.src = "/images/glowph_default.png";
                                } else {
                                  img.src = "/images/no_profile.png";
                                }
                              }}
                            />
                          </Box>
                        </Tooltip>
                      </Grid>
                    ))}
                  </Grid>
                )}
              </Box>
            </Box>
            <Box>
              <Box sx={{ display: "flex" }}>
                <Typography
                  sx={{
                    color: theme.palette.custom.subtitle,
                    fontSize: 13,
                    marginRight: 1,
                    cursor: "pointer",
                  }}
                  onClick={handleAboutClick}
                >
                  About
                </Typography>
                <Typography
                  sx={{ color: theme.palette.custom.subtitle, fontSize: 13 }}
                >
                  Privacy Policy
                </Typography>
              </Box>
              <Typography
                sx={{ color: theme.palette.custom.subtitle, fontSize: 13 }}
              >
                © 2025 Glow by Justine Cua
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

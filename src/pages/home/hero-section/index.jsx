import React from "react";
import PlainSlide from "../../../components/plain-slide";
import herosection from "../../../assets/images/herosection.png";
import { Container, Typography, Stack, Box } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import herosection2 from "../../../assets/images/herosection2.png";
import ButtonWithIcon from "../../../components/buttons/button-with-Icon";
import TrendingFlatIcon from "@mui/icons-material/TrendingFlat";
import { useMediaQuery } from "@mui/material";
import NavLink from "../../../components/links/nav-link";
import useAxiosGet from "../../../utils/use-axios-get";

const HeroSection = () => {
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  const { data } = useAxiosGet("/categories");
  let handBagsID;
  data?.categories?.map((item) => {
    if (item?.title === "Handbags") {
      handBagsID = item?.id;
    }
    return null;
  });
  return (
    <Container
      maxWidth="100%"
      sx={{ marginBottom: { xs: "30px", sm: "50px", md: "80px" } }}
    >
      <Carousel
        indicators={false}
        duration={1000}
        navButtonsAlwaysInvisible={true}
      >
        <NavLink
          path={`/category?category=${handBagsID}`}
          component={
            <PlainSlide
              image={herosection}
              heightPic={{ xs: "140px", sm: "200px", md: "300px", lg: "400px" }}
            >
              <Stack
                justifyContent="space-between"
                sx={{
                  position: "absolute",
                  top: "50%",
                  right: "0",
                  transform: "translateY(-50%)",
                  backgroundColor: "rgba(222, 222, 222, .7)",
                  backdropFilter: "blur(2px)",
                  padding: {
                    xs: "10px 10px 10px 15px",
                    md: "30px 100px 40px 40px",
                  },
                  borderRadius: "20px 0 0 20px",
                  boxSizing: "border-box",
                  width: { xs: "70%", sm: "56%" },
                  height: "75%",
                }}
              >
                <Stack marginBottom={2}>
                  <Typography
                    fontSize={{ xs: "1rem", md: "2rem", lg: "3.5rem" }}
                    sx={{ color: "primary.main" }}
                    fontWeight={800}
                  >
                    Carry your Funk
                  </Typography>
                  <Typography
                    sx={{ color: "primary.main" }}
                    fontSize={{
                      xs: "0.7rem",
                      sm: "1rem",
                      md: "1.5rem",
                      lg: "2.2rem",
                    }}
                    lineHeight={{ xs: "20px", md: "38px" }}
                  >
                    Trendy handbags collection for your party animal
                  </Typography>
                </Stack>
                <Box width={"180px"} display={isSmallScreen ? "none" : "block"}>
                  <ButtonWithIcon
                    fullWidth
                    icon={<TrendingFlatIcon style={{ fontSize: "2vw" }} />}
                    text={
                      <Typography
                        fontSize={{ xs: "10px", md: "18px", lg: "15px" }}
                        color="#fff"
                      >
                        See More
                      </Typography>
                    }
                    type="contained"
                  />
                </Box>
              </Stack>
            </PlainSlide>
          }
        />

        <NavLink
          path={`/category?type=type=new-arrivals`}
          component={
            <PlainSlide
              image={herosection2}
              heightPic={{ xs: "140px", sm: "200px", md: "300px", lg: "400px" }}
            >
              <Box
                spacing={2}
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "5%",
                  transform: "translateY(-50%)",
                }}
                width={isSmallScreen ? "250px" : "500px"}
              >
                <Typography
                  sx={{ color: "#9C1C00" }}
                  fontSize={{ xs: "1.5rem", md: "2rem", lg: "3.5rem" }}
                >
                  Spring Summer Collection
                </Typography>
                <Box
                  sx={{
                    padding: "10px",
                    backgroundColor: "#ffdd9d",
                    borderRadius: "12px",
                  }}
                  display="inline-block"
                >
                  <Typography
                    sx={{ color: "#9C1C00" }}
                    fontSize={{ xs: "0.8rem", md: "1.5rem", lg: "2.5rem" }}
                  >
                    UPTO 20% OFF
                  </Typography>
                </Box>
              </Box>
            </PlainSlide>
          }
        />
      </Carousel>
    </Container>
  );
};

export default HeroSection;

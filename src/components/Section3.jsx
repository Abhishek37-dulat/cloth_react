import { Box, Button, Typography, styled } from "@mui/material";
import React from "react";
import Fulldata from "../assets/data.json";
import P1 from "../assets/images/p81.png";
import P2 from "../assets/images/p101.png";
import P3 from "../assets/images/p71.png";
import BlurOnIcon from "@mui/icons-material/BlurOn";

const MainBox = styled(Box)(({ theme }) => ({
  //   border: "1px solid black",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "center",
  width: "100%",
  height: "100vh",
  backgroundColor: "#E8E8E8",
  position: "relative",
  "&>p": {
    fontFamily: "'Black Ops One', cursive",
    fontWeight: "600",
    fontSize: "42px",
    color: "#010101",
    marginTop: "20px",
    marginBottom: "50px",
  },
  "&>div": {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",

    "&>div": {
      //   border: "1px solid black",
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start",
      alignItems: "center",
      width: "400px",
      height: "500px",
      backgroundColor: "#F9F9F9",
      borderRadius: "10px",
      boxShadow: "0px 0px 5px rgba(0,0,0,0.2)",
      padding: "10px",
      position: "relative",
      margin: "10px",
      "&>img": {
        // border: "1px solid black",
        height: "50%",
      },
      "&>p": {
        marginTop: "5px",
      },
    },
  },
}));

const Section3 = () => {
  return (
    <MainBox>
      <Typography>Products</Typography>
      <Box>
        <Box>
          <img src={P1} alt="sdfsdgf" />

          <Typography
            style={{
              fontFamily: "'M PLUS Rounded 1c', sans-serif",
              fontWeight: "400",
              fontSize: "24px",
              textAlign: "left",
            }}
          >
            {Fulldata.taglines[0]}
          </Typography>
          <Typography
            style={{
              fontFamily: "'M PLUS Rounded 1c', sans-serif",
              fontWeight: "400",
              fontSize: "14px",
              textAlign: "left",
            }}
          >
            {Fulldata.descriptions[0]}
          </Typography>
          <Typography
            style={{
              width: "35px",
              height: "10px",
              borderRadius: "8px",
              backgroundColor: "#9D6E71",
              marginTop: "10px",
            }}
          ></Typography>
          <Box
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
              alignItems: "flex-end",
              width: "90%",
              position: "absolute",
              bottom: "10px",
              padding: "0% 5%",
            }}
          >
            <Button>
              Explore more <BlurOnIcon />
            </Button>
          </Box>
        </Box>
        <Box>
          <img src={P2} alt="sdfsdgf" />

          <Typography
            style={{
              fontFamily: "'M PLUS Rounded 1c', sans-serif",
              fontWeight: "400",
              fontSize: "24px",
              textAlign: "left",
            }}
          >
            {Fulldata.taglines[2]}
          </Typography>
          <Typography
            style={{
              fontFamily: "'M PLUS Rounded 1c', sans-serif",
              fontWeight: "400",
              fontSize: "14px",
              textAlign: "left",
            }}
          >
            {Fulldata.descriptions[2]}
          </Typography>
          <Typography
            style={{
              width: "35px",
              height: "10px",
              borderRadius: "8px",
              backgroundColor: "#66C0E3",
              marginTop: "10px",
            }}
          ></Typography>
          <Box
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
              alignItems: "flex-end",
              width: "90%",
              position: "absolute",
              bottom: "10px",
              padding: "0% 5%",
            }}
          >
            <Button>
              Explore more <BlurOnIcon />
            </Button>
          </Box>
        </Box>
        <Box>
          <img src={P3} alt="sdfsdgf" />

          <Typography
            style={{
              fontFamily: "'M PLUS Rounded 1c', sans-serif",
              fontWeight: "400",
              fontSize: "24px",
              textAlign: "left",
            }}
          >
            {Fulldata.taglines[3]}
          </Typography>
          <Typography
            style={{
              fontFamily: "'M PLUS Rounded 1c', sans-serif",
              fontWeight: "400",
              fontSize: "14px",
              textAlign: "left",
            }}
          >
            {Fulldata.descriptions[3]}
          </Typography>
          <Typography
            style={{
              width: "35px",
              height: "10px",
              borderRadius: "8px",
              backgroundColor: "#B4AFD6",
              marginTop: "10px",
            }}
          ></Typography>
          <Box
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
              alignItems: "flex-end",
              width: "90%",
              position: "absolute",
              bottom: "10px",
              padding: "0% 5%",
            }}
          >
            <Button>
              Explore more <BlurOnIcon />
            </Button>
          </Box>
        </Box>
      </Box>
    </MainBox>
  );
};

export default Section3;

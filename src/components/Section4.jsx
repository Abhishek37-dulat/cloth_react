import { Box, Typography, styled } from "@mui/material";
import React from "react";
import Fulldata from "../assets/data.json";
import P1 from "../assets/images/p12.png";
import P2 from "../assets/images/p62.png";
import L1 from "../assets/images/l2.png";

const MainBox = styled(Box)(({ theme }) => ({
  //   border: "1px solid black",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: "100vh",
  backgroundColor: "#E8E8E8",
  position: "relative",
}));
const BoxLogo = styled(Box)(({ theme }) => ({
  position: "absolute",
  left: "0px",
  top: "0px",
  "&>img": {
    width: "100px",
    padding: "10px",
  },
}));
const LeftBox = styled(Box)(({ theme }) => ({
  //   border: "1px solid black",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "50%",
  height: "100%",
  "&>div": {
    // border: "1px solid black",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    width: "80%",
    height: "100%",
    paddingLeft: "20%",
    "&>p": {
      fontFamily: "'M PLUS Rounded 1c', sans-serif",
      fontWeight: "400",
      fontSize: "36px",
      marginTop: "10px",
      "&>div": {
        // border: "1px solid black",
        width: "35px",
        height: "10px",
        borderRadius: "8px",
        backgroundColor: "#EA8814",
      },
    },
  },
}));

const RightBox = styled(Box)(({ theme }) => ({
  //   border: "1px solid black",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "50%",
  height: "100%",

  "&>div": {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "400px",
    height: "400px",
    borderRadius: "100%",
    backgroundColor: "#EA8814",
    boxShadow: "0px 0px 10px rgba(0,0,0,0.2)",
    position: "relative",
    "&>span": {
      borderRadius: "0px 30px 0px 30px ",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
      width: "100%",
      height: "100px",
      position: "absolute",
      bottom: "-20px",
      backgroundColor: "rgba(255,255,255,0.8)",
      boxShadow: "0px 0px 10px rgba(0,0,0,0.2)",
    },
    "&>img": {
      width: "80%",
    },
  },
}));

const Section4 = () => {
  console.log(Fulldata);
  return (
    <MainBox>
      <BoxLogo>
        <img src={L1} alt="swewe" />
      </BoxLogo>
      <LeftBox>
        <Box>
          <Typography>
            <div></div>
            {/* <span></span>
            <span></span> */}
            {Fulldata.titles[4]}
          </Typography>
          <Typography
            style={{
              fontFamily: "'M PLUS Rounded 1c', sans-serif",
              fontWeight: "600",
              fontSize: "24px",
            }}
          >
            {Fulldata.descriptions[4]}
          </Typography>
          <Typography
            style={{
              fontFamily: "'M PLUS Rounded 1c', sans-serif",
              fontWeight: "500",
              fontSize: "18px",
            }}
          >
            {Fulldata.thoughts[4]}
          </Typography>
          <Typography
            style={{
              fontFamily: "'M PLUS Rounded 1c', sans-serif",
              fontWeight: "600",
              fontSize: "12px",
              color: "#EA8814",
            }}
          >
            #{Fulldata.taglines[4]}
          </Typography>
        </Box>
      </LeftBox>
      <RightBox>
        <Box>
          <img src={P1} alt="sdfsdfsd" />
          <span>
            <Typography
              style={{
                fontFamily: "'Black Ops One', cursive",
                // fontWeight: "600",
                fontSize: "24px",
                color: "#010101",
              }}
            >
              {Fulldata.taglines[0]}
            </Typography>
          </span>
        </Box>
      </RightBox>
    </MainBox>
  );
};

export default Section4;

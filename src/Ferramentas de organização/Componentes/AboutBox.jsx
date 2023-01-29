import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

const AboutBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.light.main,
  boxShadow:
    "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
  position: "absolute",
  borderRadius: "4px",
}));

export default AboutBox;

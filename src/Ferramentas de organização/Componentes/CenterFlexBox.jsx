import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

const HorizontalFlex = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

export const VerticalFlex = styled(HorizontalFlex)(() => ({
  flexDirection: "column",
}));

export default HorizontalFlex;

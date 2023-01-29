import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

const CursosBox = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.light.main,
  boxShadow:
    "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
  height: "120px",
  width: "120px",
  outline: `solid 1px ${theme.palette.dark.main}`,
  outlineOffset: "-6px",
  padding: "20px",
  borderRadius: "4px",
}));

export const ModalBox = styled("div")(({ theme }) => ({
  border: `1px solid ${theme.palette.main.main}`,
  boxShadow:
    "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
  height: "fit-content",
  width: "80%",
  borderRadius: "4px",
  marginBottom: "20px",
  padding: "10px",
}));

export const DialogBox = styled(Box)(({ theme }) => ({
  border: `1px solid ${theme.palette.main.main}`,
  height: "350px",
  width: "400px",
  marginTop: "30px",
  boxShadow:
    "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
}));

export default CursosBox;

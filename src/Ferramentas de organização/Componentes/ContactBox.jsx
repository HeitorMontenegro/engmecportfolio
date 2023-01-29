import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Divider from "@mui/material/Divider";

const ContactBox = styled(Box)(({ theme }) => ({
  padding: "10px",
  border: `2px solid ${theme.palette.main.main}`,
  borderRadius: "10px",
}));

export const ContactDivider = styled(Divider)(({ theme }) => ({
  width: "80%",
  backgroundColor: theme.palette.main.main,
}));

export default ContactBox;

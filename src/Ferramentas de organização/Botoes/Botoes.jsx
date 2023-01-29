import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";

const BotaoPrimario = styled(Button)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  margin: "25px 15px",
  fontSize: "1.2rem",
  color: theme.palette.main.main,
  border: "1px solid",
}));
export const BotaoSecundario = styled(BotaoPrimario)(({ theme }) => ({
  backgroundColor: theme.palette.main.main,
  color: theme.palette.light.main,
  "&:hover": {
    color: theme.palette.main.main,
    borderColor: theme.palette.main.main,
  },
}));
export const BotaoNavegacao = styled(Button)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  width: "75px",
  height: "100%",
  color: theme.palette.light.main,
  backgroundColor: "rgba(0,0,0,0.5)",
  borderRadius: "0",
  border: "1px solid white",
  "&:hover": {
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  backdropFilter: "blur(15px)",
}));

export default BotaoPrimario;

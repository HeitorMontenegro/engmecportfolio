import { useEffect } from "react";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import SchoolIcon from "@mui/icons-material/School";
import CallIcon from "@mui/icons-material/Call";
import { BotaoNavegacao } from "../Botoes/Botoes";
import HorizontalFlex from "./CenterFlexBox";

export const BarraDeNavegação = ({ navigation, setNavigation }) => {
  useEffect(() => {
    const element = document.getElementById(`navigation-${navigation}`);
    element && element.scrollIntoView({ behavior: "smooth" });
    setNavigation(null);
  }, [navigation, setNavigation]);

  return (
    <HorizontalFlex
      sx={{
        position: "fixed",
        bottom: "0",
        margin: "20px 0",
        transform: "translate(-50%, 0)",
        left: "50%",
        height: "60px",
        width: { xs: "80%", sm: "45%", md: "30%", lg: "20%" },
      }}
    >
      <BotaoNavegacao
        sx={{ borderRadius: "28px 0 0 28px", borderRight: "none" }}
        onClick={() => setNavigation(0)}
      >
        Início
        <HomeIcon sx={{ fontSize: "1rem" }} />
      </BotaoNavegacao>
      <BotaoNavegacao
        sx={{ borderRight: "none" }}
        onClick={() => setNavigation(1)}
      >
        Sobre
        <PersonIcon sx={{ fontSize: "1rem" }} />
      </BotaoNavegacao>
      <BotaoNavegacao
        sx={{ borderRight: "none" }}
        onClick={() => setNavigation(2)}
      >
        Cursos
        <SchoolIcon sx={{ fontSize: "1rem" }} />
      </BotaoNavegacao>
      <BotaoNavegacao
        sx={{ borderRadius: "0 28px 28px 0" }}
        onClick={() => setNavigation(3)}
      >
        Contato
        <CallIcon sx={{ fontSize: "1rem" }} />
      </BotaoNavegacao>
    </HorizontalFlex>
  );
};

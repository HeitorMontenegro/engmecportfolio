import Box from "@mui/material/Box";
import Pagina from "../Ferramentas de organização/Componentes/Pagina";
import TipografiaTitulo from "../Ferramentas de organização/Tipografia/TipografiaTitulo";
import TipografiaSubtitulo from "../Ferramentas de organização/Tipografia/TipografiaSubtitulo";
import HorizontalFlex from "../Ferramentas de organização/Componentes/CenterFlexBox";
import { VerticalFlex } from "../Ferramentas de organização/Componentes/CenterFlexBox";
import BotaoPrimario from "../Ferramentas de organização/Botoes/Botoes";
import { BotaoSecundario } from "../Ferramentas de organização/Botoes/Botoes";
import useViewport from "../Ferramentas de organização/Viewport/useViewport";
import SouthIcon from "@mui/icons-material/South";
import CallIcon from "@mui/icons-material/Call";
import DownloadIcon from "@mui/icons-material/Download";
const Home = ({ theme, setNavigation }) => {
  const { width } = useViewport();
  const breakpoint = 620;

  function homeNavigation() {
    setNavigation(3);
    document
      .getElementById("navigation-3")
      .scrollIntoView({ behavior: "smooth" });
  }

  function HomeDesktop({ theme, setNavigation }) {
    return (
      <div id="navigation-0">
        <Pagina>
          <Box
            sx={{
              width: "100%",
              backgroundColor: (theme) => theme.palette.light.main,
            }}
          >
            <VerticalFlex sx={{ marginTop: "25px" }}>
              <TipografiaTitulo>Heitor Montenegro</TipografiaTitulo>
              <TipografiaSubtitulo>Engenharia Mecânica</TipografiaSubtitulo>
            </VerticalFlex>

            <HorizontalFlex>
              <BotaoPrimario onClick={() => homeNavigation()}>
                Contato
                <CallIcon sx={{ marginLeft: "10px" }} />
              </BotaoPrimario>
              <BotaoSecundario variant="outlined">
                Currículo
                <DownloadIcon sx={{ marginLeft: "10px" }} />
              </BotaoSecundario>
            </HorizontalFlex>

            <VerticalFlex
              sx={{
                position: "absolute",
                bottom: "0",
                left: "50%",
                transform: "translate(-50%, 0)",
                margin: "100px 0",
              }}
            >
              <TipografiaSubtitulo>
                Arraste para cima ou utilize a guia
              </TipografiaSubtitulo>
              <TipografiaSubtitulo>
                <SouthIcon sx={{ fontSize: "2.5rem" }} />
              </TipografiaSubtitulo>
            </VerticalFlex>
          </Box>
        </Pagina>
      </div>
    );
  }
  function HomeMobile() {
    return (
      <div id="navigation-0">
        <Pagina>
          <Box
            sx={{
              width: "100%",
              background: (theme) => theme.palette.light.main,
            }}
          >
            <VerticalFlex sx={{ marginTop: "25px" }}>
              <TipografiaTitulo>Heitor Montenegro</TipografiaTitulo>
              <TipografiaSubtitulo>Engenharia Mecânica</TipografiaSubtitulo>
            </VerticalFlex>

            <VerticalFlex>
              <BotaoPrimario onClick={() => homeNavigation()} sx={{marginTop: {xs: "50px"}}}>
                Contato
                <CallIcon sx={{ marginLeft: "10px" }} />
              </BotaoPrimario>
              <BotaoSecundario variant="outlined" sx={{marginTop: {xs: "0"}}}>
                Currículo
                <DownloadIcon sx={{ marginLeft: "10px" }} />
              </BotaoSecundario>
            </VerticalFlex>

            <VerticalFlex
              sx={{
                position: "absolute",
                bottom: "0",
                left: "50%",
                transform: "translate(-50%, 0)",
                margin: "100px 0",
              }}
            >
              <TipografiaSubtitulo>
                Arraste para cima ou utilize a guia
              </TipografiaSubtitulo>
              <TipografiaSubtitulo>
                <SouthIcon sx={{ fontSize: "2rem" }} />
              </TipografiaSubtitulo>
            </VerticalFlex>
          </Box>
        </Pagina>
      </div>
    );
  }

  return width < breakpoint ? <HomeMobile /> : <HomeDesktop />;
};
export default Home;

import Pagina from "../Ferramentas de organização/Componentes/Pagina";
import Box from "@mui/material/Box";
import ContactBox from "../Ferramentas de organização/Componentes/ContactBox";
import HorizontalFlex from "../Ferramentas de organização/Componentes/CenterFlexBox";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";
import { VerticalFlex } from "../Ferramentas de organização/Componentes/CenterFlexBox";
import { ContactDivider } from "../Ferramentas de organização/Componentes/ContactBox";
import TipografiaTexto from "../Ferramentas de organização/Tipografia/TipografiaTexto";
import TipografiaSubtitulo from "../Ferramentas de organização/Tipografia/TipografiaSubtitulo";
import BotaoPrimario from "../Ferramentas de organização/Botoes/Botoes";
import { BotaoSecundario } from "../Ferramentas de organização/Botoes/Botoes";
import useViewport from "../Ferramentas de organização/Viewport/useViewport";
import Snackbar from "@mui/material/Snackbar";
import { useState } from "react";
const Contato = () => {
  const { width } = useViewport();
  const breakpoint = 1200;

  const [openWhatsapp, setOpenWhatsapp] = useState(false);
  const handleCloseWhatsapp = (e, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenWhatsapp(false);
  };
  const [openEmail, setOpenEmail] = useState(false);
  const handleCloseEmail = (e, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenEmail(false);
  };

  function copyWhatsapp() {
    navigator.clipboard.writeText("(83)99940-5158");
  }

  function copyEmail() {
    navigator.clipboard.writeText("heitormontenegro@hotmail.com");
  }
  function ContatoDesktop({ theme }) {
    return (
      <div id="navigation-3">
        <Pagina>
          <Box
            sx={{
              width: "100%",
              background: (theme) => theme.palette.light.main,
            }}
          >
            <HorizontalFlex>
              <ContactBox
                sx={{ height: "450px", width: "320px", margin: "75px" }}
              >
                <VerticalFlex>
                  <WhatsAppIcon
                    sx={{fontSize: "4rem", marginTop: "2.5rem", color: (theme) => theme.palette.dark.main }}
                  />
                  <VerticalFlex sx={{ width: "100%" }}>
                    <TipografiaSubtitulo>Whatsapp</TipografiaSubtitulo>
                    <ContactDivider sx={{ margin: "2rem 0 8rem" }} />
                    <TipografiaTexto>(83) 99940-5158</TipografiaTexto>
                  </VerticalFlex>
                  <HorizontalFlex>
                    <BotaoPrimario
                      onClick={() => {
                        copyWhatsapp();
                        handleCloseEmail();
                        setOpenWhatsapp(true);
                      }}
                    >
                      Copiar
                    </BotaoPrimario>
                    <Snackbar
                      message="Número de telefone copiado!"
                      autoHideDuration={2500}
                      open={openWhatsapp}
                      onClose={handleCloseWhatsapp}
                      ContentProps={{
                        sx: {
                          background: (theme) => theme.palette.main.main,
                          opacity: "0.2",
                          fontSize: "1.1rem",
                        },
                      }}
                    />
                    <BotaoSecundario
                      target="_blank"
                      href="https://wa.me/5583999405158"
                    >
                      Contatar
                    </BotaoSecundario>
                  </HorizontalFlex>
                </VerticalFlex>
              </ContactBox>

              <ContactBox
                sx={{ height: "450px", width: "320px", margin: "75px" }}
              >
                <VerticalFlex>
                  <EmailIcon sx={{ fontSize: "4rem", marginTop: "2.5rem", color: (theme) => theme.palette.dark.main}} />
                  <VerticalFlex sx={{ width: "100%" }}>
                    <TipografiaSubtitulo>Email</TipografiaSubtitulo>
                    <ContactDivider sx={{ margin: "2rem 0 8rem" }} />
                    <TipografiaTexto>
                      heitormontenegro@hotmail.com
                    </TipografiaTexto>
                  </VerticalFlex>
                  <HorizontalFlex>
                    <BotaoPrimario
                      onClick={() => {
                        copyEmail();
                        handleCloseWhatsapp();
                        setOpenEmail(true);
                      }}
                    >
                      Copiar
                    </BotaoPrimario>
                    <Snackbar
                      message="Endereço de email copiado!"
                      autoHideDuration={2500}
                      open={openEmail}
                      onClose={handleCloseEmail}
                      ContentProps={{
                        sx: {
                          background: (theme) => theme.palette.main.main,
                          opacity: "0.2",
                          fontSize: "1.1rem",
                        },
                      }}
                    />
                    <BotaoSecundario
                      target="_blank"
                      href="mailto:heitormontenegro@hotmail.com"
                    >
                      Contatar
                    </BotaoSecundario>
                  </HorizontalFlex>
                </VerticalFlex>
              </ContactBox>
            </HorizontalFlex>
          </Box>
        </Pagina>
      </div>
    );
  }
  function ContatoMobile() {
    return (
      <div id="navigation-3">
        <Pagina>
          <Box
            sx={{
              width: "100%",
              background: (theme) =>
                theme.palette.light.main
            }}
          >
            <VerticalFlex>
              <ContactBox
                sx={{
                  height: {xs: "320px", sm: "350px"},
                  width: { xs: "220px", sm: "320px" },
                  marginTop: {xs: "20px", sm:"80px"},
                }}
              >
                <VerticalFlex>
                  <WhatsAppIcon
                    sx={{ fontSize: "4rem", marginTop: {xs:"0.2rem", sm:"2.5rem"}, color: (theme) => theme.palette.dark.main}}
                  />
                  <VerticalFlex>
                    <TipografiaSubtitulo>Whatsapp</TipografiaSubtitulo>
                    <ContactDivider
                      sx={{
                        marginTop: "2rem",
                        marginBottom: { xs: "5rem", sm: "2.5rem", md: "2rem" },
                      }}
                    />
                    <TipografiaTexto>(83) 99940-5158</TipografiaTexto>
                  </VerticalFlex>
                  <HorizontalFlex>
                    <BotaoPrimario
                      onClick={() => {
                        copyWhatsapp();
                        handleCloseEmail();
                        setOpenWhatsapp(true);
                      }}
                    >
                      Copiar
                    </BotaoPrimario>
                    <Snackbar
                      message="Número de telefone copiado!"
                      autoHideDuration={1500}
                      open={openWhatsapp}
                      onClose={handleCloseWhatsapp}
                      ContentProps={{
                        sx: {
                          background: (theme) => theme.palette.main.main,
                          opacity: "0.2",
                          fontSize: "1rem",
                        },
                      }}
                    />
                    <BotaoSecundario
                      target="_blank"
                      href="https://wa.me/5583999405158"
                    >
                      Contatar
                    </BotaoSecundario>
                  </HorizontalFlex>
                </VerticalFlex>
              </ContactBox>

              <ContactBox
                sx={{
                  height: {xs: "320px", sm: "350px"},
                  width: { xs: "220px", sm: "320px" },
                  marginTop: { xs: "50px", md: "40px", sm: "30px" },
                }}
              >
                <VerticalFlex>
                  <EmailIcon sx={{ fontSize: "4rem", marginTop: {xs:"0.2rem", sm:"2.5rem"}, color: (theme) => theme.palette.dark.main }} />
                  <VerticalFlex>
                    <TipografiaSubtitulo>Email</TipografiaSubtitulo>
                    <ContactDivider
                      sx={{
                        marginTop: "2rem",
                        marginBottom: { xs: "5rem", sm: "2.5rem", md: "2rem" },
                      }}
                    />
                    <TipografiaTexto>
                      heitormontenegro@hotmail.com
                    </TipografiaTexto>
                  </VerticalFlex>
                  <HorizontalFlex>
                    <BotaoPrimario
                      onClick={() => {
                        copyEmail();
                        handleCloseWhatsapp();
                        setOpenEmail(true);
                      }}
                    >
                      Copiar
                    </BotaoPrimario>
                    <Snackbar
                      message="Endereço de email copiado!"
                      autoHideDuration={1500}
                      open={openEmail}
                      onClose={handleCloseEmail}
                      ContentProps={{
                        sx: {
                          background: (theme) => theme.palette.main.main,
                          opacity: "0.2",
                          fontSize: "1rem",
                        },
                      }}
                    />
                    <BotaoSecundario
                      target="_blank"
                      href="mailto:heitormontenegro@hotmail.com"
                    >
                      Contatar
                    </BotaoSecundario>
                  </HorizontalFlex>
                </VerticalFlex>
              </ContactBox>
            </VerticalFlex>
          </Box>
        </Pagina>
      </div>
    );
  }

  return width < breakpoint ? <ContatoMobile /> : <ContatoDesktop />;
};

export default Contato;

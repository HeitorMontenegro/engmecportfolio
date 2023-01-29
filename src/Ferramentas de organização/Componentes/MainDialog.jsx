import * as React from "react";
import Box from "@mui/material/Box";
import BotaoPrimario from "../Botoes/Botoes";
import { BotaoSecundario } from "../Botoes/Botoes";
import Paper from "@mui/material/Paper";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import TipografiaSubtitulo from "../Tipografia/TipografiaSubtitulo";
import TipografiaTitulo from "../Tipografia/TipografiaTitulo";
import TipografiaTexto from "../Tipografia/TipografiaTexto";
import { ModalBox } from "./CursosBox";
import { VerticalFlex } from "./CenterFlexBox";
import Dialog from "@mui/material/Dialog";
import Slide from "@mui/material/Slide";
import Divider from "@mui/material/Divider";
import { DialogBox } from "./CursosBox";
import Typography from "@mui/material/Typography";
import DownloadIcon from "@mui/icons-material/Download";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

const shortid = require("shortid");
const Transition1 = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const Transition2 = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function MainDialog({ item }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <BotaoPrimario
        sx={{
          marginTop: "10px",
          height: "30px",
          width: "100px",
          fontSize: "1rem",
        }}
        onClick={handleOpen}
      >
        Abrir
      </BotaoPrimario>
      <Dialog
        open={open}
        TransitionComponent={Transition1}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <BotaoSecundario
          sx={{ height: "30px", width: "50px" }}
          onClick={() => handleClose()}
        >
          <KeyboardBackspaceIcon />
        </BotaoSecundario>
        <Paper
          sx={{
            height: "fit-content",
            width: "30vw",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {item.cursos.map((curso) => (
            <ModalBox key={shortid.generate()}>
              <VerticalFlex>
                <TipografiaSubtitulo>{curso.name}</TipografiaSubtitulo>
                <TipografiaTexto>
                  Instituição: {curso.instituicao}
                </TipografiaTexto>
                <ChildDialog curso={curso} />
              </VerticalFlex>
            </ModalBox>
          ))}
        </Paper>
      </Dialog>
    </div>
  );
}
function ChildDialog({ curso, theme }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <BotaoPrimario onClick={handleOpen}>Explorar curso</BotaoPrimario>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition2}
      >
        <Box sx={{ height: "100vh", width: "100vw" }}>
          <BotaoSecundario
            sx={{ height: "30px", width: "50px" }}
            onClick={() => handleClose()}
          >
            <KeyboardBackspaceIcon />
          </BotaoSecundario>
        </Box>
        <Box
          sx={{
            position: "absolute",
            top: "0",
            left: "0",
            margin: "50px auto",
            width: "100vw",
          }}
        >
          <TipografiaTitulo>{curso.name}</TipografiaTitulo>

          <Box
            sx={{
              margin: "0 auto",
              width: "60vw",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Box>
              <DialogBox>
                <Box sx={{ marginBottom: "10px" }}>
                  <TipografiaSubtitulo>
                    Informações do curso
                  </TipografiaSubtitulo>
                </Box>

                <Divider
                  variant="middle"
                  sx={{
                    backgroundColor: (theme) => theme.palette.dark.main,
                    opacity: "0.4",
                  }}
                />
                <Box
                  sx={{
                    display: "flex",
                    marginTop: "25px",
                    marginLeft: "20px",
                  }}
                >
                  <Typography
                    align="left"
                    sx={{
                      fontSize: { xs: "1rem", sm: "1.5rem" },
                      color: "#040F16",
                    }}
                  >
                    Quantidade de horas:&nbsp;
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: { xs: "1rem", sm: "1.5rem" },
                      color: (theme) => theme.palette.main.main,
                    }}
                  >
                    {curso.horas}h
                  </Typography>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    marginTop: "10px",
                    marginLeft: "20px",
                  }}
                >
                  <Typography
                    align="left"
                    sx={{
                      fontSize: { xs: "1rem", sm: "1.5rem" },
                      color: "#040F16",
                    }}
                  >
                    Instituição:&nbsp;
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: { xs: "1rem", sm: "1.5rem" },
                      color: (theme) => theme.palette.main.main,
                    }}
                  >
                    {curso.instituicao}
                  </Typography>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    marginTop: "10px",
                    marginLeft: "20px",
                  }}
                >
                  <Typography
                    align="left"
                    sx={{
                      fontSize: { xs: "1rem", sm: "1.5rem" },
                      color: "#040F16",
                    }}
                  >
                    Disponibiliza certificado:&nbsp;
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: { xs: "1rem", sm: "1.5rem" },
                      color: (theme) => theme.palette.main.main,
                    }}
                  >
                    {curso.certificado ? "Sim" : "Não"}
                  </Typography>
                </Box>

                {curso.certificado && (
                  <BotaoPrimario
                    sx={{ margin: "30px auto", width: "150px" }}
                    href={curso.certificacao.link}
                    download={curso.certificacao.title}
                  >
                    Certificado <DownloadIcon />
                  </BotaoPrimario>
                )}
              </DialogBox>

              <DialogBox>
                <Box sx={{ marginBottom: "10px" }}>
                  <TipografiaSubtitulo>Minhas impressões</TipografiaSubtitulo>
                </Box>
                <Divider
                  variant="middle"
                  sx={{
                    backgroundColor: (theme) => theme.palette.dark.main,
                    opacity: "0.4",
                  }}
                />
                <Box sx={{ display: "block", margin: "25px 10px 0 20px" }}>
                  {curso.opiniao?.map((paragrafo) => (
                    <Box
                      sx={{ wordWrap: "break-word", marginBottom: "10px" }}
                      key={shortid.generate()}
                    >
                      <Typography
                        align="left"
                        variant="paragraph"
                        sx={{
                          fontSize: { xs: "1rem", sm: "1.5rem" },
                          color: "#040F16",
                        }}
                      >
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        {paragrafo.paragrafo}.<br />
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </DialogBox>
            </Box>

            <Box>
              <DialogBox sx={{ height: "732px", width: "550px" }}>
                <Box sx={{ marginBottom: "10px" }}>
                  <TipografiaSubtitulo>Imagens</TipografiaSubtitulo>
                </Box>
                <Divider
                  variant="middle"
                  sx={{
                    backgroundColor: (theme) => theme.palette.dark.main,
                    opacity: "0.4",
                  }}
                />
                <ImageList
                  cols={2}
                  sx={{
                    height: "620px",
                    width: "540px",
                    margin: "25px 5px 5px 5px",
                  }}
                >
                  {curso.imagens?.map((imagem) => (
                    <ImageListItem key={shortid.generate()}>
                      <img src={imagem.img} alt={imagem.title} />
                    </ImageListItem>
                  ))}
                </ImageList>
              </DialogBox>
            </Box>
          </Box>
        </Box>
      </Dialog>
    </React.Fragment>
  );
}

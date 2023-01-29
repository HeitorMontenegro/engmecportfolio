import Pagina from "../Ferramentas de organização/Componentes/Pagina";
import Box from "@mui/material/Box";
import AboutBox from "../Ferramentas de organização/Componentes/AboutBox";
const SobreMim = () => {
  return (
    <div id="navigation-1">
      <Pagina>
        <Box
          sx={{
            background: (theme) => theme.palette.gradient.main,
            height: "100vh",
            width: "100vw",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              height: "100vh",
              width: "100vw",
            }}
          >
            <AboutBox
              sx={{
                height: "30vh",
                width: { lg: "20vw", md: "25vw", xs: "38vw" },
                top: { md: "110vh", xs: "160vh" },
                left: { lg: "5vw", md: "65vw", xs: "10vw" },
              }}
            >
              <Box sx={{ padding: "20px" }}>1</Box>
            </AboutBox>

            <AboutBox
              sx={{
                height: { md: "80vh", xs: "50vh" },
                width: { md: "40vw", xs: "80vw" },
                bottom: { md: "-90vh", xs: "-54vh" },
                left: { lg: "30vw", md: "5vw" },
              }}
            >
              <Box sx={{ padding: "20px" }}>2</Box>
            </AboutBox>

            <AboutBox
              sx={{
                height: "30vh",
                width: { lg: "20vw", md: "25vw", xs: "38vw" },
                bottom: "-90vh",
                right: { lg: "5vw", md: "10vw", xs: "10vw" },
              }}
            >
              <Box sx={{ padding: "20px" }}>3</Box>
            </AboutBox>
          </Box>
        </Box>
      </Pagina>
    </div>
  );
};

export default SobreMim;

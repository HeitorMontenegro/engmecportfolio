import Pagina from "../Ferramentas de organização/Componentes/Pagina";
import Box from "@mui/material/Box";
import CursosBox from "../Ferramentas de organização/Componentes/CursosBox";
import TipografiaCursos from "../Ferramentas de organização/Tipografia/TipografiaCursos";
import MainDialog from "../Ferramentas de organização/Componentes/MainDialog";
import { VerticalFlex } from "../Ferramentas de organização/Componentes/CenterFlexBox";
import { ListaDeCategorias } from "../Ferramentas de organização/CursosLists/ListaDeCategorias";
import Grid from '@mui/material/Grid';

const Cursos = () => {

    const shortid = require('shortid');

  return (
    <div id="navigation-2">
      <Pagina>
        <Box
          sx={{ background: (theme) => theme.palette.gradient.main , height: "100vh", width: "100vw"}}
        >

                <Grid container spacing={5} sx={{display: "flex", justifyContent: "center", alignItems: "center", padding: "50px"}}>
                  {ListaDeCategorias.map( (item) =>
                
                  <Grid item xs={12} sm={6} md={4} lg={3} xl={2} sx={{display: "flex", justifyContent: "center", alignItems: "center"}} key={shortid.generate()}>
                    <CursosBox>
                      <VerticalFlex>
                        <TipografiaCursos>{item.categoria}</TipografiaCursos>
                        {item.icon}
                        <MainDialog item={item}/>
                      </VerticalFlex>
                    </CursosBox>
                  </Grid>
                )}
              </Grid>
  
        </Box>
      </Pagina>
    </div>
  );
};

export default Cursos;

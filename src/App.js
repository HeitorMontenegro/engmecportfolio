import { BarraDeNavegação } from "./Ferramentas de organização/Componentes/BarraDeNavegação";
import { useState } from "react";
import Box from "@mui/material/Box";
import Home from "../src/Components/Home";
import SobreMim from "./Components/SobreMim";
import Contato from "./Components/Contato";
import Cursos from "./Components/Cursos";
function App() {
  const [navigation, setNavigation] = useState(0);

  return (
    <Box>
      <Home navigation={navigation} setNavigation={setNavigation} />
      <SobreMim />
      <Cursos />
      <Contato />
      <BarraDeNavegação navigation={navigation} setNavigation={setNavigation} />
    </Box>
  );
}

export default App;

import React from "react";
import Typography from "@mui/material/Typography";

const TipografiaTitulo = ({ children }) => {
  return (
    <Typography
      align="center"
      sx={{
        fontSize: { xs: "1.7rem", sm: "2.5rem", md: "4rem" },
        color: "#0B2638",
      }}
    >
      {children}
    </Typography>
  );
};

export default TipografiaTitulo;

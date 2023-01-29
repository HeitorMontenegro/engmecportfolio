import React from "react";
import Typography from "@mui/material/Typography";

const TipografiaCursos = ({ children, theme }) => {
  return (
    <Typography
      align="center"
      sx={{
        fontSize: { xs: "1.1rem", sm: "1.4rem" },
        color: (theme) => theme.palette.dark.main,
      }}
    >
      {children}
    </Typography>
  );
};

export default TipografiaCursos;

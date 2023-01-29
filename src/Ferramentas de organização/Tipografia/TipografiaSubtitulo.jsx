import React from "react";
import Typography from "@mui/material/Typography";

const TipografiaSubtitulo = ({ children }) => {
  return (
    <Typography
      align="center"
      sx={{
        fontSize: { xs: "1.1rem", sm: "1.4rem", md: "2.2rem" },
        color: (theme) => theme.palette.dark.main,
      }}
    >
      {children}
    </Typography>
  );
};

export default TipografiaSubtitulo;

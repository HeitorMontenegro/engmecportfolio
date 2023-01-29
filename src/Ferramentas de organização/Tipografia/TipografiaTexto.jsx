import React from "react";
import Typography from "@mui/material/Typography";

const TipografiaTexto = ({ children }) => {
  return (
    <Typography
      align="center"
      sx={{ fontSize: { xs: "1rem", sm: "1.5rem" }, color: "#040F16" }}
    >
      {children}
    </Typography>
  );
};

export default TipografiaTexto;

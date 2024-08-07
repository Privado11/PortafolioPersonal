import React, { useEffect, useState } from "react";
import Alert from "@mui/material/Alert";

function Alerta({ onClose }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div>
      <Alert
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "1rem",
        }}
        severity="success"
        onClose={onClose}
      >
        Correo enviado exitosamente.
      </Alert>
    </div>
  );
}

export { Alerta };

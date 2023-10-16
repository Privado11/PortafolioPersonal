import React, { useState } from "react";
import axios from "axios";
import {
  TextField,
  Button,
  FormControl,
  Container,
  Typography,
} from "@mui/material";
import * as yup from "yup";
import "../styles/Contact.css";

function Contact() {
  const validacionesFormulario = yup.object().shape({
    nombre: yup.string().required("El nombre es obligatorio"),
    correo: yup
      .string()
      .email("Ingresa un correo válido")
      .required("El correo es obligatorio"),
    telefono: yup
      .string()
      .matches(
        /^[0-9]{10}$/,
        "Ingresa un número de teléfono válido de 10 dígitos"
      ),
    mensaje: yup.string().required("El mensaje es obligatorio"),
  });

  const valoresInicialesFormulario = {
    nombre: "",
    correo: "",
    telefono: "",
    mensaje: "",
  };

  const [datos, setDatos] = useState(valoresInicialesFormulario);
  const [errors, setErrors] = useState(validacionesFormulario);
  const [textButton, setTextButton] = useState("Enviar");

  const actualizarDatos = (campo, value) => {
    setErrors({
      ...errors,
      [campo]: false,
    });

    setDatos({
      ...datos,
      [campo]: value,
    });
  };

  const enviarCorreo = async (event) => {
    event.preventDefault();
    setTextButton("Enviando...");
    try {
      validacionesFormulario
        .validate(datos, { abortEarly: false })
        .then(async () => {
          const response = await axios.post(
            "http://localhost:3000/enviar-correo",
            datos
          );
          console.log("Correo enviado:", response.data);
          setDatos(valoresInicialesFormulario);
          setTextButton("Enviar");
        })
        .catch((validationErrors) => {
          const newErrors = {};
          validationErrors.inner.forEach((error) => {
            newErrors[error.path] = error.message;
          });
          setErrors(newErrors);
        });
    } catch (error) {
      console.error("Error al enviar el correo:", error);
    }
  };

  return (
    <main className="main__contact">
      <Container className="contact__content">
        <h2 className="contact__tittle">Contáctame</h2>
        <div className="contact__description">
          <p className="contact__description-text">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <form onSubmit={enviarCorreo} className="contanct__content-form">
          <FormControl>
            <TextField
              label="Nombre"
              variant="outlined"
              value={datos.nombre}
              onChange={(e) => actualizarDatos("nombre", e.target.value)}
              className="contact__content-form-input"
            />
            {errors.nombre && (
              <Typography color="error">{errors.nombre}</Typography>
            )}
          </FormControl>
          <FormControl>
            <TextField
              label="Correo electrónico"
              variant="outlined"
              value={datos.correo}
              onChange={(e) => actualizarDatos("correo", e.target.value)}
              className="contact__content-form-input"
            />
            {errors.correo && (
              <Typography color="error">{errors.correo}</Typography>
            )}
          </FormControl>
          <FormControl>
            <TextField
              label="Numero de teléfono"
              variant="outlined"
              value={datos.telefono}
              onChange={(e) => actualizarDatos("telefono", e.target.value)}
              className="contact__content-form-input"
            />
            {errors.telefono && (
              <Typography color="error">{errors.telefono}</Typography>
            )}
          </FormControl>
          <FormControl>
            <TextField
              label="Mensaje"
              variant="outlined"
              value={datos.mensaje}
              onChange={(e) => actualizarDatos("mensaje", e.target.value)}
              className="contact__content-form-input contact__content-form-input-message"
            />
            {errors.mensaje && (
              <Typography color="error">{errors.mensaje}</Typography>
            )}
          </FormControl>
          <Button type="submit" variant="contained" color="primary">
            {textButton}
          </Button>
        </form>
      </Container>
    </main>
  );
}

export { Contact };

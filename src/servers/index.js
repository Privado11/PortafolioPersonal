const express = require("express");
const { Resend } = require("resend");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(cors());
const port = 3000;

const resend = new Resend("re_3vaJ9E7C_UATnBPHLpersxnu8ULEzXVJP");

app.use(bodyParser.json());

app.post("/enviar-correo", async (req, res) => {
  try {
    const { nombre, correo, telefono, mensaje } = req.body;
    const data = await resend.emails.send({
      from: "Portafolio Personal <onboarding@resend.dev>",
      to: ["portafoliopersonal22@gmail.com"],
      subject: "¡Te han contactado!",
      html: `<p><strong>Nombre: ${nombre}</strong></p>
            <p><strong>Correo: ${correo}</strong></p>
            <p><strong>Teléfono: ${telefono}</strong></p>
            <p><strong>Mensaje: ${mensaje}</strong></p>`,
    });

    console.log("Correo enviado con éxito:", data);
    res.status(200).send("Correo enviado con éxito");
  } catch (error) {
    console.error("Error al enviar el correo:", error);
    res.status(500).send("Error al enviar el correo");
  }
});

app.listen(port, () => {
  console.log(`Servidor en ejecución en http://localhost:${port}`);
});

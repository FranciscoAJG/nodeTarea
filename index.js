const express = require("express");
const app = express();
const path = require("path");

/*
app.get('/',index)

app.get('/hola', respuesta)*/
//app.use(express.static(path.join(__dirname,'respuesta')))
//app.use(express.static(path.join(__dirname,'public'))).get('/hola',app.use(express.static(path.join(__dirname,'respuesta'))))

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "public/index.html"));
});

app.get("/hola", function (req, res) {
  res.send(`<h1>${req.query.name}</h1>`);
});

app.listen(9090, () => {
  console.log("Aplicacion corriendo en el puerto 9090");
});

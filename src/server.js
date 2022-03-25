const express = require ("express");
const sequelize = require("./database/index");
const pedidosRoute = require("./routes/pedidos.routes");

const port = 3000; 
const app = express ();

sequelize.sync().then(() => {
    console.log(`database is running`);
});

app.use(express.json());

app.use(pedidosRoute);

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
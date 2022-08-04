import "reflect-metadata"
import express from "express";
import router from "./routes";
import createConnection from "./database"

createConnection();
const server = express();

//Configuração da aplicação
server.use(express.json());
server.use(express.urlencoded({extended: true}));

//Configuração de rotas
server.use(router);

server.listen(5000, () => {
    console.log("Executando aplicação na porta 5000\nhttp://localhost:5000");
});
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("express");
const morgan = require("morgan");
const userRoute = require("./routes/users.js"); 
const authRoute = require("./routes/auth.js"); 


dotenv.config();


// conexao com o mongo
const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL); 
        console.log("Conectei no MongoDB");
    } catch (error) {
        throw error
    }
};
//
mongoose.connection.on("disconnected", () => {
    console.log("MongoDB desconectado");
})
mongoose.connection.on("connected", () => {
    console.log("MongoDB conectado");
});


// middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

app.get("/", (req, res) => {
    res.send("Bem vindo a pagina principal")
});
app.get("/users", (req, res) => {
    res.send("Bem vindo a pagina de usuarios")
});

app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);


app.listen(8800, () => {
    connect()
    console.log("Backend server está rodando !")
});
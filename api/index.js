const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const userRoute = require("./routes/users.js"); 
const authRoute = require("./routes/auth.js"); 
const postRoute = require("./routes/posts.js"); 

dotenv.config();

// Conexao com o mongo
const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL); 
        console.log("Conectei no MongoDB");
    } catch (error) {
        console.error("Erro ao conectar no MongoDB:", error);
        process.exit(1); // Exit the process with an error code
    }
};

mongoose.connection.on("disconnected", () => {
    console.log("MongoDB desconectado");
});

mongoose.connection.on("connected", () => {
    console.log("MongoDB conectado");
});

// Middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

app.get("/", (req, res) => {
    res.send("Bem-vindo à página principal");
});

app.get("/users", (req, res) => {
    res.send("Bem-vindo à página de usuários");
});

app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/posts", postRoute);

app.listen(8800, () => {
    connect();
    console.log("Backend server está rodando!");
});

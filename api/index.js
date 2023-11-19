const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const userRoute = require("./routes/users.js");
const authRoute = require("./routes/auth.js");
const postRoute = require("./routes/posts.js");
const multer = require("multer");
const path = require("path");

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

app.use("/images", express.static(path.join(__dirname, "public/images")));

// Middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));
app.use(cookieParser());

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "public/images");
    },
    filename: (req, file, cb) => {
      cb(null, req.body.name);
    },
  });
  
  const upload = multer({ storage: storage });
  app.post("/api/upload", upload.single("file"), (req, res) => {
    try {
      return res.status(200).json("File uploded successfully");
    } catch (error) {
      console.error(error);
    }
  });
  
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

import cors from "cors";
import express from "express";
import session from "express-session";
import morgan from "morgan";
import path from "path";

import { routes } from "./routes/routes.js";
import { createTable } from "./database/database.js";
import { GV } from "./config.js";

const app = express();
const PORT = GV.PORT || 4000;

const __dirname = path.resolve();

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(morgan("dev"));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
app.use(
  session({
    secret: "mi_secreto",
    resave: false,
    saveUninitialized: true,
    cookie: {
      secure: false, // true solo si usas HTTPS
      httpOnly: true, // evita acceso a cookie desde JavaScript del cliente
      // sameSite: 'lax' // permite envío de cookies en navegadores modernos
    },
  })
);
app.use("/api/", routes);

app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}/`)
);
createTable();

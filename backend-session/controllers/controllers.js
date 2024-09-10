import { connection } from "../database/database.js";
export const controllers = {};

controllers.register = async (req, res) => {
  const { username, password } = req.body;
  //verifica que el nombre es unico
  const sql = "SELECT * FROM users WHERE username = ?";
  const existUser = await connection.promise().query(sql, [username]);

  if (!existUser) {
    return res
      .status(409)
      .json({ message: "El nombre de usuario ya está en uso" });
  }
  const regisquery = "INSERT INTO users (username, password) VALUES (?, ?)";
  const [user] = await connection
    .promise()
    .query(regisquery, [username, password]);

  // Save user info in the session
  req.session.userId = user.id;
  req.session.username = user.username;

  if (user.affectedRows === 1) {
    return res.status(201).json({ message: "Usuario creado exitosamente" });
  } else {
    return res.status(500).json({ message: "Error al crear el usuario" });
  }
};

controllers.login = async (req, res) => {
  const { username, password } = req.body;
  const sql = "SELECT * FROM users WHERE username = ?";
  const [rows] = await connection.promise().query(sql, [username]);

  if (rows.length > 0) {
    return res.status(409).json({ message: "El nombre está en uso" });
  }

  const regisQuery = "INSERT INTO users (username, password) VALUES (?,?)";
  const [result] = await connection
    .promise()
    .query(regisQuery, [username, password]);

  //save user info in session
  req.session.userId = result.insertId;
  req.session.username = username;

  if (result.affectedRows === 1) {
    return res.status(201).json({ message: "Usuario creado" });
  } else {
    return res.status(500).json({ message: "Error al crear usuario" });
  }
};

controllers.session = async (req, res) => {
  if (req.session.userId) {
    return res.json({
      loggedIn: true,
      user: { id: req.session.userId, username: req.session.username },
      message: "Sesion establecida",
    });
  } else {
    return res
      .status(401)
      .json({ loggedIn: false, message: "No hay sesión activa" });
  }
};

controllers.logout = async (req, res) => {
  console.log(req.session);
  req.session.destroy((err) => {
    if (err) {
      return res.status(500).json({ message: "Error al cerrar la sesión" });
    }
    res.clearCookie("lacuki"); // Nombre de cookie por defecto para express-session
    return res.json({ message: "Sesión cerrada exitosamente" });
  });
};

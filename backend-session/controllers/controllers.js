import { connection } from "../database/database.js";
const controllers = {};

controllers.register = async (req, res) => {
  const { username, password } = req.body;
  //verifica que el nombre es unico
  const sql = "SELECT * FROM users WHERE username = ?";
  const query = connection.query(sql, username);
  if (query.length > 0) {
    return res
      .status(409)
      .json({ message: "El nombre de usuario ya está en uso" });
  }
  const regisquery = "INSERT INTO users (username, password) VALUES (?, ?)";
  const user = connection.query(regisquery, { username, password });
  if (user) {
    return res.status(201).json({ message: "Usuario creado exitosamente" });
  } else {
    return res.status(500).json({ message: "Error al crear el usuario" });
  }
};

controllers.login = async (req, res) => {
  const { username, password } = req.body;

  // Buscar usuario
  const slq = "SELECT * FROM users WHERE username = ? AND password = ?";
  const user = connection.query(slq, { username, password });
  if (!user) {
    return res.status(401).json({ message: "Credenciales incorrectas" });
  } else {
    if (user) {
      // Guardar información del usuario en la sesión
      req.session.userId = user.id;
      req.session.username = user.username;

      return res.json({
        message: "Inicio de sesión exitoso",
        user: { id: user.id, username: user.username },
      });
    } else {
      return res.status(401).json({ message: "Credenciales incorrectas" });
    }
  }
};

controllers.session = async (req, res) => {
  if (req.session.userId) {
    return res.json({
      loggedIn: true,
      user: { id: req.session.userId, username: req.session.username },
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
    res.clearCookie("connect.sid"); // Nombre de cookie por defecto para express-session
    return res.json({ message: "Sesión cerrada exitosamente" });
  });
};

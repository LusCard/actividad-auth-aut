const controllers = {};

controllers.login = async (req, res) => {
  const { username, password } = req.body;

  // Buscar usuario
  const user = database.user.find(
    (u) => u.username === username && u.password === password
  );

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

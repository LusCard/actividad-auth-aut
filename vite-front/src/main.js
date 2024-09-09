import "../style.css";
import { Footer } from "./components/Footer.js";
import { Header } from "./components/Header.js";
import { Home } from "./pages/HomePage.js";
import { Login } from "./pages/LoginPage.js";
import { Register } from "./pages/RegisterPage.js";

const pathname = window.location.pathname;
const app = document.querySelector("#app");

if (app) {
  app.innerHTML = "";
  app.append(Header());

  // Route handling
  if (pathname === "/") {
    app.appendChild(Home());
  } else if (pathname === "/register") {
    app.appendChild(Register());
  } else if (pathname === "/login") {
    const loginComponent = Login();
    app.appendChild(loginComponent);
  }

  app.append(Footer());
}

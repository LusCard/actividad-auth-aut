import "../style.css";
import { Header } from "./components/Header.js";
import { Home } from "./pages/HomePage.js";

//IMPORT components and pages
import { Login } from "./pages/LoginPage.js";
import { Register } from "./pages/RegisterPage.js";
const pathname = window.location.pathname;

const app = document.querySelector("#app");

if (app) {
  app.innerHTML = "";
  app.appendChild(Header());
}
if (pathname === "/") app.appendChild(Home());
if (pathname === "register") app.appendChild(Register());
if (pathname === "/login") app.appendChild(Login());

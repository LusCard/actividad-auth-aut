import "../style.css";
import { Header } from "./components/Header.js";

//IMPORT components and pages
import { Login } from "./pages/LoginPage.js";
const pathname = window.location.pathname;

const app = document.querySelector("#app");

if (app) {
  app.innerHTML = "";
  app.appendChild(Header());
}
//if(pathname === "/") app.appendChild(LandingPage())

if (pathname === "/login") app.appendChild(Login());

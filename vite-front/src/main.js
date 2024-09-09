import "../style.css";
import { Footer } from "./components/Footer.js";
import { Header } from "./components/Header.js";
import { Home } from "./pages/HomePage.js";
import { Login } from "./pages/LoginPage.js";
import { Register } from "./pages/RegisterPage.js";
import { authCheck } from "./petitions.js";

const pathname = window.location.pathname;
const app = document.querySelector("#app");

async function initPage() {
  app.innerHTML = "";
  app.append(Header());

  const isLoggedIn = await authCheck();

  if (pathname === "/home") {
    if (isLoggedIn) {
      app.appendChild(Home());
    } else {
      window.location.href = "/login";
    }
  } else if (pathname === "/register") {
    if (!isLoggedIn) {
      app.appendChild(Register());
    } else {
      window.location.href = "/home";
    }
  } else if (pathname === "/login") {
    if (isLoggedIn) {
      window.location.href = "/home";
    }
    app.appendChild(Login());
  } else {
    const errMsg = document.createElement("p");
    errMsg.textContent = "Error not found";
    app.append(errMsg);
  }

  app.append(Footer());
}

initPage();

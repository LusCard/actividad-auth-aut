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
  app.appendChild(Header());

  // Route handling
  if (pathname === "/") {
    app.appendChild(Home());
  } else if (pathname === "/register") {
    app.appendChild(Register());
  } else if (pathname === "/login") {
    const loginComponent = Login();
    app.appendChild(loginComponent);

    // Login form logic
    const loginForm = loginComponent.querySelector("#login-form");

    if (loginForm) {
      loginForm.addEventListener("submit", async (event) => {
        event.preventDefault();

        const username = document.querySelector("#username").value;
        const password = document.querySelector("#password").value;

        try {
          const response = await fetch("http://localhost:4000/login", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            credentials: "include", // Allow cookies to be sent
            body: JSON.stringify({ username, password }),
          });

          const data = await response.json();

          if (response.ok) {
            // Successfully logged in
            console.log("Login successful:", data);
            window.location.href = "/dashboard"; // Redirect to dashboard
          } else {
            // Handle login error
            console.error("Login failed:", data.message);
            document.querySelector("#message").textContent = data.message;
          }
        } catch (error) {
          console.error("Error during login:", error);
        }
      });
    }
  } else {
    const errorMsg = document.createElement("p");
    errorMsg.textContent = "No se encuentra la página solicitada";
    app.appendChild(errorMsg);
  }

  app.appendChild(Footer());
}

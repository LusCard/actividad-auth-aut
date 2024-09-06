export const loginForm = document.querySelector("#login-form");

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
      credentials: "include",
      body: JSON.stringify({ username, password }),
    });

    const data = await response.json();

    if (response.ok) {
      // Successfully logged in
      console.log("Login successful:", data);
      // You can redirect to another page or update the UI
      window.location.href = "/dashboard";
    } else {
      // Handle login error
      console.error("Login failed:", data.message);
      document.querySelector("#message").textContent = data.message;
    }
  } catch (error) {
    console.error("Error during login:", error);
  }
});

export async function checkSession() {
  const response = await fetch("http://localhost:4000/session", {
    method: "GET",
    credentials: "include", // Include cookies to check session
  });

  const data = await response.json();
  if (data.loggedIn) {
    console.log("User is logged in:", data.user);
  } else {
    console.log("No active session");
  }
}

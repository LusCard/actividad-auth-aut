export const loginUser = async (username, password) => {
  try {
    const response = await fetch("http://localhost:5000/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({ username, password }),
    });
    if (!response.ok) {
      const data = await response.json();
      throw new Error(data.message);
    }
    return await response.json();
  } catch (error) {
    console.log("Error fetching login-form ", error);
  }
};
export const regisUser = async () => {
  try {
    const response = await fetch("http://localhost:5000/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({ username, password }),
    });
    if (!response.ok) {
      const data = await response.json();
      throw new Error(data.message);
    }
    return await response.json();
  } catch (error) {
    console.log("Error fetching regis-form ", error);
  }
};

export const authCheck = async () => {
  try {
    const response = await fetch("http://localhost:5000/api/session/", {
      method: "POST",
      credentials: "include",
    });
    if (response.ok) {
      const data = await response.json();
      return data.loggedIn;
    } else {
      return false;
    }
  } catch (error) {
    console.error("Error checkign auth", error);
    return false;
  }
};

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
    if (response.ok) {
      const data = await response.json();
      throw new Error(data.message);
    }
    return await response.json();
  } catch (error) {
    console.log("Error fetching form ", error);
  }
};

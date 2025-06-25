const handleLogin = async () => {
  try {
    const res = await fetch("https://backend-e0sb.onrender.com/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password })
    });

    const data = await res.json();

    if (res.ok && data.token) {
      localStorage.setItem("token", data.token); // ✅ Save token
      // Optionally redirect user
      window.location.href = "/upload";
    } else {
      alert("Login failed: " + (data.message || "unknown error"));
    }
  } catch (error) {
    console.error("Login error:", error);
    alert("Something went wrong during login.");
  }
};

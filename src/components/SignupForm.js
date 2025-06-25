import { useState } from "react";

const SignupForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSignup = async (e) => {
    e.preventDefault();
    setErrorMessage("");

    try {
      const res = await fetch("https://backend-e0sb.onrender.com/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
      });

      const data = await res.json();

      if (res.ok) {
        setSuccess(true);
        // Optional: redirect after a short delay
        setTimeout(() => {
          window.location.href = "/login";
        }, 1500);
      } else {
        setErrorMessage(data.message || "Sign-up failed.");
      }
    } catch (error) {
      console.error("Signup error:", error);
      setErrorMessage("Something went wrong during sign-up.");
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "2rem auto" }}>
      <h2>Sign Up</h2>

      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
      {success && <p style={{ color: "green" }}>Account created! Redirecting to log in...</p>}

      <form onSubmit={handleSignup}>
        <input
          type="email"
          placeholder="Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <input
          type="password"
          placeholder="Password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button type="submit">Create Account</button>
      </form>
    </div>
  );
};

export default SignupForm;

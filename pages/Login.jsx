import React from "react";
import { useLoaderData } from "react-router-dom";
import { loginUser } from "../api";

export async function loader({ request }) {
  return new URL(request.url).searchParams.get("message");
}

export default function Login() {
  const [loginFormData, setLoginFormData] = React.useState({
    email: "",
    password: "",
  });
  const message = useLoaderData();

  function handleSubmit(e) {
    e.preventDefault();
    loginUser(loginFormData).then((data) => console.log(data));
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setLoginFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  return (
    <div className="login-container">
      <h1>Sign in to your account</h1>
      {message && <h2 style={{ color: "darkred" }}>{message}</h2>}
      <form onSubmit={handleSubmit} className="login-form">
        <input
          name="email"
          onChange={handleChange}
          type="email"
          placeholder="Email address"
          value={loginFormData.email}
        />
        <input
          name="password"
          onChange={handleChange}
          type="password"
          placeholder="Password"
          value={loginFormData.password}
        />
        <button type="submit">Log in</button>
      </form>
    </div>
  );
}

"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import "./login.css";

type User = {
  email: string;
  password: string;
};

export default function LoginPage() {
  const router = useRouter();

  const [user, setUser] = useState<User>({
    email: "",
    password: "",
  });

  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const onLogin = async () => {
    try {
      setErrorMsg("");
      setLoading(true);

      // ✅ SEND JSON BODY
      const payload = {
        email: user.email.toLowerCase().trim(),
        password: user.password,
      };

      const response = await axios.post("/api/login", payload, {
        headers: { "Content-Type": "application/json" },
      });

      console.log("login success", response.data);
      router.push("/dashboard");
      router.refresh(); 
    } catch (err: any) {
      const message =
        err?.response?.data?.error ||
        err?.response?.data?.message ||
        "Login failed";

      console.log("login failed:", err);
      setErrorMsg(message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setButtonDisabled(!(user.email.trim().length > 0 && user.password.trim().length > 0));
  }, [user]);

  return (
    <div className="sign-page">
      <div className="sign-card">
        <h1 className="title">{loading ? "Logging in..." : "Welcome Back 🐶"}</h1>

        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          placeholder="Enter your email"
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          placeholder="Enter your password"
        />

        {errorMsg ? <p className="error-text">{errorMsg}</p> : null}

        <button
          className="button-login"
          onClick={onLogin}
          disabled={buttonDisabled || loading}
        >
          {loading ? "Please wait..." : "Login"}
        </button>

        <Link href="/register" className="signup-link">
          Dont have an account? Register Now
        </Link>
      </div>
    </div>
  );
}

"use client";

import "./register.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import Link from "next/link";

type User = {
  email: string;
  password: string;
  name: string;
};

export default function Register() {
  const router = useRouter();

  const [user, setUser] = useState<User>({
    email: "",
    password: "",
    name: "",
  });

  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    const ok =
      user.name.trim().length > 0 &&
      user.email.trim().length > 0 &&
      user.password.trim().length >= 6;

    setButtonDisabled(!ok);
  }, [user]);

  const onRegister = async () => {
  try {
    setErrorMsg("");
    setLoading(true);

    const res = await axios.post(
      "/api/register",
      {
        name: user.name,
        email: user.email,
        password: user.password,
      },
      {
        headers: { "Content-Type": "application/json" },
      }
    );

    console.log("signup success:", res.data);
    router.push("/login");
  } catch (err: any) {
    const message =
      err?.response?.data?.message ||
      err?.response?.data?.error ||
      "Something went wrong";

    console.error("signup error:", err);
    setErrorMsg(message);
  } finally {
    setLoading(false);
  }
};

  return (
    <div className="sign-page">
      <div className="sign-card">
        <h1 className="title">{loading ? "Registering..." : "Lets Get You Registered"}</h1>

        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          value={user.name}
          onChange={(e) => setUser({ ...user, name: e.target.value })}
          placeholder="Enter your name"
        />

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
          onClick={onRegister}
          disabled={buttonDisabled || loading}
        >
          {loading ? "Please wait..." : "Register"}
        </button>

        <Link href="/login" className="signup-link">
          You have an account ? Login
        </Link>
      </div>
    </div>
  );
}
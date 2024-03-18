import React, { useEffect, useState } from "react";
import {
  getUserFromToken,
  login,
  verifyToken,
  verifyUserToken,
} from "../services/auth.service";
// import { useNavigate } from "react-router-dom";
import { useRouter } from "next/router";
import Lottie from "react-lottie";
import styles from "../styles/login.module.css";
import animationData from "../../public/lottie/animationData.json";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const navigate = useNavigate();
  const router = useRouter();

  useEffect(() => {
    const verifyToken = async (token) => {
      return await verifyUserToken(token);
    };

    const checkAndNavigate = async () => {
      const token = localStorage.getItem("access-token");
      if (token) {
        console.log("token===>", token);
        router.push("/gis");
      } else router.push("/login");
    };

    checkAndNavigate();
  }, [router]);

  const handleLogin = async () => {
    try {
      console.log("inside login");
      const res = await login(email, password);
      console.log("sucessfully logged in");
      const token = res.token;
      console.log("token ===>", token);
      localStorage.setItem("access-token", token);
      router.push("/gis");
    } catch (error) {
      console.log(error);
    }
  };

  const lottieOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className={styles.container}>
      {/* Left side with image */}
      <div className={styles.image}>
        <Lottie options={lottieOptions} height={760} width={850} />
      </div>

      {/* Right side with login form */}
      <div className={styles.formContainer}>
        <br></br>
        <h2>Sign up for Bento Headquarters</h2>
        <br></br>
        <form className={styles.loginForm}>
          {/* Add your form fields here (e.g., username, password) */}
          <label className={styles.label}>
            Username:
            <input className={styles.input} type="text" name="username" />
          </label>
          <label className={styles.label}>
            Email:
            <input
              className={styles.input}
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label className={styles.label}>
            Password:
            <input
              className={styles.input}
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <button className={styles.button} type="button" onClick={handleLogin}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;

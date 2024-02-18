import React, { useState } from "react";
import { login } from "../services/auth.service";
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

  const handleLogin = async () => {
    try {
      const res = await login(email, password);
      const token = res;
      localStorage.setItem("access-token", token);
      router.push('/map');
      // navigate("/map");
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
        <h2>Login</h2>
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
              type="text"
              name="username"
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
          <button className={styles.button} type="submit" onClick={handleLogin}>
            Login
          </button>
          <button className={styles.button} type="submit">
            sign up
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;

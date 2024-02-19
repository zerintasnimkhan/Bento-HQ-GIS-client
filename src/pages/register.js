import React, { useState } from "react";
import { login } from "../services/auth.service";
// import { useNavigate } from "react-router-dom";
import { useRouter } from "next/router";
import Lottie from "react-lottie";
import styles from "../styles/login.module.css";
import animationData from "../../public/lottie/animationData.json";

const RegistrationPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const navigate = useNavigate();
  const router = useRouter();

  const handleRegistration = async () => {
    try {
      const res = await login(email, password);
      const token = res;
      localStorage.setItem("access-token", token);
      router.push("/map");
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
          <button
            className={styles.button}
            type="submit"
            onClick={() => router.push("/map")}
          >
            Login
          </button>
          <button
            className={styles.button}
            type="submit"
            onClick={() => router.push("/map")}
          >
            sign up
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegistrationPage;

import React from "react";
import Lottie from "react-lottie";
import styles from "../styles/login.module.css";
import animationData from "../../public/lottie/animationData.json";

const LoginPage = () => {
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
            <input className={styles.input} type="text" name="username" />
          </label>
          <label className={styles.label}>
            Password:
            <input className={styles.input}type="password" name="password" />
          </label>
          <button className={styles.button} type="submit">Login</button>
          <button className={styles.button} type="submit">sign up</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;

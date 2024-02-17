import React from "react";
import styles from "../styles/login.module.css"; // Import your styles file

const LoginPage = () => {
  return (
    <div className={styles.container}>
      {/* Left side with image */}
      <div className={styles.imageContainer}>
        <img
          className={styles.image}
          src="your-image-url.jpg"
          alt="Login Page Image"
        />
      </div>

      {/* Right side with login form */}
      <div className={styles.formContainer}>
        <h2>Login</h2>
        <form className={styles.loginForm}>
          {/* Add your form fields here (e.g., username, password) */}
          <label>
            Username:
            <input type="text" name="username" />
          </label>
          <label>
            Password:
            <input type="password" name="password" />
          </label>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;

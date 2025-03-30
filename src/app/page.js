import LoginForm from "@/components/loginForm/loginForm";
import styles from "./page.module.css";

const Login = () => {
  return (
    <main className={styles.main}>
      <LoginForm />
    </main>
  );
};

export default Login;

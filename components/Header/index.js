import styles from "../../styles/header.module.css";
import Image from "next/image";
import logo from "../../images/logo.svg";
import illustrationWorking from "../../images/illustration-working.svg";
export default function Header() {
  return (
    <header className={styles.header}>
      <div className="container">
        <nav>
          <Image className={styles.logo}  alt="logo" src={logo} />
          <ul>
            <li>
              <a href="#">Features</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
            <li>
              <a href="#">Resources</a>
            </li>
          </ul>
        </nav>
        <div className={styles.btns}>
          <button>Login</button>
          <button>Sign Up</button>
        </div>
        <div className={styles.headerContent}>
          <div className={styles.content}>
            <h2>More than just shorter links</h2>
            <p>
              Build your brand’s recognition and get detailed insights on how
              your links are performing.
            </p>
            <button>Get Started</button>
          </div>
          <div className={styles.image}>
            <Image alt="" src={illustrationWorking} />
          </div>
        </div>
      </div>
    </header>
  );
}

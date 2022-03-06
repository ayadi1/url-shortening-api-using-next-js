import styles from "../../styles/header.module.css";
import Image from "next/image";
import logo from "../../images/logo.svg";
import illustrationWorking from "../../images/illustration-working.svg";

export default function Header() {
  let showMenu = true;
  const showHadeMenu = () => {
    const navMobile = document.getElementById("navMobile");
    if (showMenu) {
      navMobile.classList.add("showMenu");
      navMobile.classList.remove("hadeMenu");
      showMenu = !showMenu;
    } else {
      navMobile.classList.add("hadeMenu");
      navMobile.classList.remove("showMenu");
      showMenu = !showMenu;
    }
  };
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.mainNav}>
          <nav>
            <Image className={styles.logo} alt="logo" src={logo} />
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
          <div onClick={showHadeMenu} className={styles.menuIcon}></div>
          <div id="navMobile" className={styles.navMobile}>
            <div className={styles.links}>
              <a href="#">Features</a>
              <a href="#">Pricing</a>
              <a href="#">Resources</a>
            </div>
            <div className={styles.hr}></div>
            <div className={styles.navMobileBtns}>
              <button>Sign Up</button>
            </div>
          </div>
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

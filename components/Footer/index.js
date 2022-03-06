import styles from "../../styles/footer.module.css";
import Image from "next/image";
import logo from "../../images/logo.svg";
import facebookIcon from "../../images/icon-facebook.svg";
import instagramIcon from "../../images/icon-instagram.svg";
import pinrerestIcon from "../../images/icon-pinterest.svg";
import twitterIcon from "../../images/icon-twitter.svg";
export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.lists}>
          <Image alt="logo" src={logo} className={styles.logo} />
          <ul className={styles.mainList}>
            <li>
              <h5>Features</h5>
              <ul>
                <li>
                  <a href="#">Link Shortening</a>
                </li>
                <li>
                  <a href="#">Branded Links</a>
                </li>
                <li>
                  <a href="#">Analytics</a>
                </li>
              </ul>
            </li>
            <li>
              <h5>Resources</h5>
              <ul>
                <li>
                  <a href="#">Blog</a>
                </li>
                <li>
                  <a href="#">Developers</a>
                </li>
                <li>
                  <a href="#">Support</a>
                </li>
              </ul>
            </li>
            <li>
              <h5>Company</h5>
              <ul>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Our Team</a>
                </li>
                <li>
                  <a href="#">Careers</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>
            </li>
          </ul>
          <div className={styles.socialMediaIcons}>
            <a href="https://www.facebook.com/ossama.ayadi.9">
              <Image alt="facebookIcon" src={facebookIcon} />
            </a>
            <a href="https://www.instagram.com/hv.ew/">
              <Image alt="instagramIcon" src={instagramIcon} />
            </a>
            <a href="#">
              <Image alt="pinrerestIcon" src={pinrerestIcon} />
            </a>
            <a href="https://twitter.com/ayadioo">
              <Image alt="twitterIcon" src={twitterIcon} />
            </a>
          </div>
        </div>
        <div className={styles.me}>
          coded by{" "}
          <a href="https://www.linkedin.com/in/oussama-ayadi1/">
            oussama ayadi
          </a>
        </div>
      </div>
    </footer>
  );
}

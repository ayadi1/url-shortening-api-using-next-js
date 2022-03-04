import styles from "../../../styles/main.module.css";
import Image from "next/image";
import iconBrandRecognition from "../../../images/icon-brand-recognition.svg";
import iconDetailedRecords from "../../../images/icon-detailed-records.svg";
import iconFullyCustomizable from "../../../images/icon-fully-customizable.svg";
export default function Statistics() {
  return (
    <div className={styles.Statistics}>
      <div className={styles.title}>
        <h3>Advanced Statistics</h3>
        <p>
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
      </div>
      <div className={styles.StatisticsCards}>
        <div className={styles.card}>
          <div className={styles.cardImage}>
            <Image alt="" src={iconBrandRecognition} />
          </div>
          <h4 className={styles.cardTitle}>Brand Recognition</h4>
          <p className={styles.cardBody}>
            Boost your brand recognition with each click. Generic links don’t
            mean a thing. Branded links help instil confidence in your content.
          </p>
        </div>
        <div className={styles.card}>
          <div className={styles.cardImage}>
            <Image alt="" src={iconDetailedRecords} />
          </div>
          <h4 className={styles.cardTitle}>Detailed Records</h4>
          <p className={styles.cardBody}>
            Gain insights into who is clicking your links. Knowing when and
            where people engage with your content helps inform better decisions.
          </p>
        </div>
        <div className={styles.card}>
          <div className={styles.cardImage}>
            <Image alt="" src={iconFullyCustomizable} />
          </div>
          <h4 className={styles.cardTitle}>Fully Customizable</h4>
          <p className={styles.cardBody}>
            Improve brand awareness and content discoverability through
            customizable links, supercharging audience engagement.
          </p>
        </div>
      </div>
    </div>
  );
}

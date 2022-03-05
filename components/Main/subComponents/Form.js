import styles from "../../../styles/main.module.css";
export default function Form() {
  return (
    <div className={styles.mainForm}>
      <div className={styles.form}>
        <div className={styles.inputs}>
          <input type="text" placeholder="Shorten a link here..." />
          <button>Shorten It!</button>
        </div>
        <div className={styles.errMessage}>errMessage...</div>
      </div>
      <div className={styles.list}>
        <div className={styles.listItem}>
          <p className={styles.mainUrl}>www.google.com</p>
          <div className={styles.actions}>
            <p className={styles.shortUrl}>go.gle</p>
            <button>copy</button>
          </div>
        </div>
        <div className={styles.listItem}>
          <p className={styles.mainUrl}>www.google.com</p>
          <div className={styles.actions}>
            <p className={styles.shortUrl}>go.gle</p>
            <button>copy</button>
          </div>
        </div>
        <div className={styles.listItem}>
          <p className={styles.mainUrl}>www.google.com</p>
          <div className={styles.actions}>
            <p className={styles.shortUrl}>go.gle</p>
            <button>copy</button>
          </div>
        </div>
      </div>
    </div>
  );
}

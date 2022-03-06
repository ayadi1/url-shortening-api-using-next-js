import { useEffect, useState } from "react";
import styles from "../../../styles/main.module.css";

export default function Links({ url }) {
  const [linkData, setLinkData] = useState({ url, shortUrl: {} });
  const [btn, setBtn] = useState({
    style: { backgroundColor: "var(--Cyan)" },
    text: "copy",
  });
  const api = "https://api.shrtco.de/v2/shorten?url=";
  const getData = async () => {
    const res = await fetch(api + url)
      .then((response) => response.json())
      .catch((err) => console.log(err));
    setLinkData({ url, shortUrl: res.result });
  };
  const copyLink = () => {
    navigator.clipboard.writeText(linkData.shortUrl.full_short_link);
    setBtn({
      text: "copied!",
      style: { backgroundColor: "var(--Dark-Violet)" },
    });
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className={styles.listItem}>
      <p className={styles.mainUrl}>{linkData.url}</p>
      <div className={styles.actions}>
        <p className={styles.shortUrl}>{linkData.shortUrl.full_short_link}</p>
        <button style={btn.style} onClick={copyLink}>
          {btn.text}
        </button>
      </div>
    </div>
  );
}

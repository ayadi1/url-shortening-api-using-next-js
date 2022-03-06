import styles from "../../../styles/main.module.css";
import Links from "./Links";
import data from "../../../data.json";
import { useState } from "react";
import validURL from "../../../functions/validUrl";
export default function Form() {
  const [urls, setUrls] = useState(data["Links"]);
  const [inputData, setInputData] = useState("");

  const urlComponents = urls.map((item) => {
    return <Links key={item.id} url={item.url} />;
  });

  const addUrl = () => {
    const formInput = document.getElementById("formInput");
    const errMessage = document.getElementById("errMessage");
    if (!validURL(inputData)) {
      formInput.classList.add("errStyleForInput");
      errMessage.classList.add("showErrMessage");
    } else {
      formInput.classList.remove("errStyleForInput");
      errMessage.classList.remove("showErrMessage");
      const newId = new Date().getMilliseconds();
      setUrls((old) => {
        return [...old, { url: inputData, id: newId }];
      });
      setInputData("");
    }
  };
  return (
    <div className={styles.mainForm}>
      <div className={styles.form}>
        <div className={styles.inputs}>
          <input
            type="text"
            placeholder="Shorten a link here..."
            value={inputData}
            onChange={(e) => setInputData(e.target.value)}
            id="formInput"
          />
          <button onClick={addUrl}>Shorten It!</button>
        </div>
        <div id="errMessage" className={styles.errMessage}>
          Please add a link...
        </div>
      </div>
      <div className={styles.list}>{urlComponents}</div>
    </div>
  );
}

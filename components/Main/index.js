import styles from "../../styles/main.module.css";
import Form from "./subComponents/Form";
import Statistics from "./subComponents/Statistics";
export default function Main() {
  return (
    <main className={styles.main}>
      <div className="container">
        <Form />
        <Statistics />
      </div>
    </main>
  );
}

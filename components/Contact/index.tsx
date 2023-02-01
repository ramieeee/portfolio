import { useState } from "react";
import styles from "./Contact.module.scss";

export default function Contact(): JSX.Element {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [body, setBody] = useState<string>("");

  const onNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const onEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const onBodyChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setBody(e.target.value);
  };

  const onBtnClick = () => {
    console.log(name);
    console.log(email);
    console.log(body);
  };

  return (
    <div className={styles.Contact}>
      <span className={styles.contactGlowText}>Contact</span>
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <span>If you ever feel like reaching me, send me a message</span>
        </div>
        <div className={styles.formContainer}>
          <input
            className={styles.name}
            placeholder="name"
            onChange={onNameChange}
          />
          <input
            className={styles.email}
            placeholder="email"
            onChange={onEmailChange}
            type="email"
          />
          <textarea
            className={styles.emailBody}
            placeholder="message"
            onChange={onBodyChange}
          />
          <button
            className={styles.submitBtn}
            onClick={onBtnClick}
            disabled={name === "" || email === "" || body === ""}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

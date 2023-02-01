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
    // setName("");
    // setEmail("");
    // setBody("");
    console.log("sent!");
  };

  return (
    <div className={styles.Contact}>
      <span className={styles.contactGlowText}>Contact</span>
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <span>If you ever feel like reaching me, send me a message</span>
          <div className={styles.line} />
          <span className={styles.contactLink}>
            Cehck out my{" "}
            <a
              href="https://github.com/ramieeee"
              target="_blank"
              className={styles.linkGlow}
            >
              Github
            </a>{" "}
            and{" "}
            <a
              href="https://www.notion.so/ramieeee/Hey-26c0b8e94dce4543b0bb50abf571b0cf"
              target="_blank"
              className={styles.linkGlow}
            >
              Notion
            </a>{" "}
            as well
          </span>
        </div>
        <div className={styles.formContainer}>
          <input
            className={styles.name}
            placeholder="name"
            onChange={onNameChange}
            value={name}
          />
          <input
            className={styles.email}
            placeholder="email"
            onChange={onEmailChange}
            value={email}
            type="email"
          />
          <textarea
            className={styles.emailBody}
            placeholder="message"
            onChange={onBodyChange}
            value={body}
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

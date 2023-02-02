import { useState } from "react";
import styles from "./Contact.module.scss";
import axios, { AxiosResponse } from "axios";
import { useMutation } from "react-query";

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

  const queryMigMutation = useMutation({
    mutationFn: () => {
      const payload = {
        name: name,
        email: email,
        body: body,
      };

      return axios.post("/api/message", payload);
    },
    onSuccess: (data: AxiosResponse) => {
      console.log(data.status);
    },
  });

  const onBtnClick = () => {
    var reg_email =
      /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;
    if (!reg_email.test(email)) {
      alert("invalid email format");
    } else {
      alert("successfully sent");
      queryMigMutation.mutate();
    }
  };

  return (
    <div className={styles.Contact} id="Contact">
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

          <form>
            <input
              className={styles.email}
              placeholder="your email"
              onChange={onEmailChange}
              value={email}
              type="email"
            />
          </form>

          <textarea
            className={styles.emailBody}
            placeholder="message (200 letters)"
            onChange={onBodyChange}
            value={body}
            maxLength={10}
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

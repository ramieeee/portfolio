import { useState, forwardRef } from "react";
import styles from "./Contact.module.scss";
import axios, { AxiosResponse } from "axios";
import { useMutation } from "react-query";

import SnackbarObj from "@/interface/SnackbarObj";

// component
import AlertSnackBar from "@/components/AlertSnackBar";

interface Props {
  props: null;
}

const Contact = forwardRef<HTMLDivElement, Props>((props, ref) => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [body, setBody] = useState<string>("");
  const [isSnackbarOn, setIsSnackbarOn] = useState<boolean>(false);
  const [snackbarProps, setSnackbarProps] = useState<SnackbarObj>({
    message: "",
    color: "",
    textShadow: "",
  });

  const onNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const onEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const onBodyChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setBody(e.target.value);
  };

  const sendMutation = useMutation({
    mutationFn: () => {
      const payload = {
        name: name,
        email: email,
        body: body,
      };

      return axios.post("/api/message", payload);
    },
    onSuccess: (data: AxiosResponse) => {
      setSnackbarProps({
        message: "successfully sent",
        color: "#86ff9a",
        textShadow: "0 0 10px #3cff5c, 0 0 20px #3cff5c, 0 0 30px #3cff5c",
      });
      setName("");
      setEmail("");
      setBody("");
    },
    onError: (e: AxiosResponse) => {
      setSnackbarProps({
        message: "Error. Try again",
        color: "#f28888",
        textShadow: "0 0 10px #f34848, 0 0 20px #f34848, 0 0 30px #f34848",
      });
    },
  });

  //message, color, boxshadow
  const onBtnClick = () => {
    var reg_email =
      /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;
    if (!reg_email.test(email)) {
      setSnackbarProps({
        message: "invalid email format",
        color: "#f28888",
        textShadow: "0 0 10px #f34848, 0 0 20px #f34848, 0 0 30px #f34848",
      });
      handleSnackbar();
    } else {
      handleSnackbar();
      sendMutation.mutate();
    }
  };

  const handleSnackbar = () => {
    setIsSnackbarOn(true);
    setTimeout(() => {
      setIsSnackbarOn(false);
    }, 3000);
  };

  return (
    <div className={styles.Contact} id="Contact" ref={ref}>
      <span className={styles.contactGlowText}>Contact</span>

      <div className={styles.container}>
        <div className={styles.textContainer}>
          <span className={styles.test}>
            If you ever feel like reaching me, send me a message
          </span>
          <div className={styles.line} />
          <span className={styles.contactLink}>
            Check out my{" "}
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
            placeholder="message"
            onChange={onBodyChange}
            value={body}
            maxLength={2000}
          />

          <button
            className={styles.submitBtn}
            onClick={onBtnClick}
            disabled={
              name === "" || email === "" || body === "" || isSnackbarOn
            }
          >
            Send
          </button>

          <AlertSnackBar
            isSnackbarOn={isSnackbarOn}
            snackbarProps={snackbarProps}
          />
        </div>
      </div>
    </div>
  );
});

export default Contact;

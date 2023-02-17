import { useEffect, useState, forwardRef, useRef } from "react";
import styles from "./Contact.module.scss";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

// component
import AlertSnackBar from "@/components/AlertSnackBar/AlertSnackBar";

// interface
import SnackbarObj from "@/interface/SnackbarObj";

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

  const textTopRef = useRef<HTMLSpanElement>(null);
  const textBottomRef = useRef<HTMLSpanElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.fromTo(
      textTopRef.current,
      { opacity: 0 },
      {
        opacity: 1,
        delay: 0.3,
        duration: 1,
        scrollTrigger: {
          trigger: textTopRef.current,
        },
      }
    );
    gsap.fromTo(
      textBottomRef.current,
      { opacity: 0 },
      {
        opacity: 1,
        delay: 0.5,
        duration: 1,
        scrollTrigger: {
          trigger: textBottomRef.current,
        },
      }
    );

    gsap.fromTo(
      lineRef.current,
      { width: "0px", transform: "translate(8vw)" },
      {
        width: "100%",
        transform: "translate(0px)",
        delay: 0.8,
        duration: 0.4,
        scrollTrigger: {
          trigger: lineRef.current,
        },
      }
    );
    gsap.fromTo(
      formRef.current,
      { opacity: 0 },
      {
        opacity: 1,
        delay: 1,
        duration: 2,
        scrollTrigger: {
          trigger: formRef.current,
        },
      }
    );
  }, []);

  const onNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const onEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const onBodyChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setBody(e.target.value);
  };

  const sendData = async () => {
    const payload = {
      name: name,
      email: email,
      body: body,
    };

    const response = await fetch("/api/message", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
    const res = await response.json();

    if (res.status === 200) {
      setSnackbarProps({
        message: "successfully sent",
        color: "#86ff9a",
        textShadow: "0 0 10px #3cff5c, 0 0 20px #3cff5c, 0 0 30px #3cff5c",
      });
      setName("");
      setEmail("");
      setBody("");
    } else {
      setSnackbarProps({
        message: "Error. Try again",
        color: "#f28888",
        textShadow: "0 0 10px #f34848, 0 0 20px #f34848, 0 0 30px #f34848",
      });
    }
  };

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
      sendData();
    }
  };

  const handleSnackbar = () => {
    setIsSnackbarOn(true);
    setTimeout(() => {
      setIsSnackbarOn(false);
      setSnackbarProps({
        message: "",
        color: "",
        textShadow: "",
      });
    }, 3000);
  };

  return (
    <div className={styles.Contact} id="Contact" ref={ref}>
      <span className={styles.contactGlowText}>Contact</span>

      <div className={styles.container}>
        <div className={styles.textContainer}>
          <span className={styles.test} ref={textTopRef}>
            If you ever feel like reaching me, send me a message
          </span>
          <div className={styles.line} ref={lineRef} />
          <span className={styles.contactLink} ref={textBottomRef}>
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
        <div className={styles.formContainer} ref={formRef}>
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

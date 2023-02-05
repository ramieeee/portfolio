import styles from "./Specialty.module.scss";
import AiIcon from "@/components/icons/AiIcon";
import CodingIcon from "@/components/icons/CodingIcon";

const Line = (): JSX.Element => {
  return (
    <>
      <div
        style={{
          width: "40px",
          borderBottom: "1px white solid",
          margin: "20px 0",
        }}
      />
    </>
  );
};

export default function Specialty(): JSX.Element {
  return (
    <>
      <div className={styles.Specialty} id="Specialty">
        <div className={styles.specialtyGlowText}>
          <span>My Specialty</span>
        </div>

        <div className={styles.container}>
          <div className={styles.specialtyBox}>
            <AiIcon width={"50px"} height={"50px"} color={"#ffffff"} />
            <Line />
            <span className={styles.specialtyTitle}>
              Artificial Inteligence
            </span>
            <span className={styles.specialtyText}>
              As a postgraduate student,
            </span>
          </div>
          <div className={styles.specialtyBox}>
            <CodingIcon width={"50px"} height={"50px"} color={"#ffffff"} />
            <Line />
            <span className={styles.specialtyTitle}>Web Development</span>
            <span className={styles.specialtyText}>
              As a front-end developer,
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

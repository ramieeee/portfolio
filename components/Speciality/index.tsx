import styles from "./Speciality.module.scss";
import AiIcon from "@/components/AiIcon";
import CodingIcon from "@/components/CodingIcon";

const Line = () => {
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

export default function Speciality(): JSX.Element {
  return (
    <>
      <div className={styles.Speciality}>
        <span className={styles.SpecialityGlowText}>My Speciality</span>

        <div className={styles.container}>
          <div className={styles.specialityBox}>
            <AiIcon width={"50px"} height={"50px"} color={"#ffffff"} />
            <Line />
            <span className={styles.specialityTitle}>
              Artificial Inteligence
            </span>
            <span className={styles.specialityText}>
              As a postgraduate student...
            </span>
          </div>
          <div className={styles.specialityBox}>
            <CodingIcon width={"50px"} height={"50px"} color={"#ffffff"} />
            <Line />
            <span className={styles.specialityTitle}>Web Development</span>
            <span className={styles.specialityText}>
              As a front-end developer...
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

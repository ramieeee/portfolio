import styles from "./Footer.module.scss";

// components
import ReactIcon from "@/components/icons/ReactIcon";
import TypescriptIcon from "@/components/icons/TypescriptIcon";
import NextjsIcon from "@/components/icons/NextjsIcon";
import PostgresqlIcon from "@/components/icons/PostgresqlIcon";
import PrismaIcon from "@/components/icons/PrismaIcon";
import ReactQueryIcon from "@/components/icons/ReactQueryIcon";

export default function Footer(): JSX.Element {
  const iconColor: string = "#9ec8f3";
  const iconWidth: string = "40px";
  const iconHeight: string = "40px";

  return (
    <>
      <div className={styles.lineContainer}>
        <div className={styles.line} />
      </div>
      <div className={styles.Footer}>
        <span className={styles.textTop}>This web page was built with</span>
        <div className={styles.iconContainer}>
          <ReactIcon width={iconWidth} height={iconHeight} color={iconColor} />
          <TypescriptIcon
            width={iconWidth}
            height={iconHeight}
            color={iconColor}
          />
          <NextjsIcon width={iconWidth} height={iconHeight} color={iconColor} />
          <PostgresqlIcon
            width={iconWidth}
            height={iconHeight}
            color={iconColor}
          />
          <PrismaIcon width={iconWidth} height={iconHeight} color={iconColor} />
          <ReactQueryIcon
            width={iconWidth}
            height={iconHeight}
            color={iconColor}
          />
        </div>
        <div className={styles.textBottom}>and deployed on Oracle Cloud</div>
      </div>
    </>
  );
}

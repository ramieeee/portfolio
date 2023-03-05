import styles from "./Footer.module.scss";

// components
import ReactIcon from "@/components/icons/ReactIcon/ReactIcon";
import TypescriptIcon from "@/components/icons/TypescriptIcon/TypescriptIcon";
import NextjsIcon from "@/components/icons/NextjsIcon/NextjsIcon";
import PostgresqlIcon from "@/components/icons/PostgresqlIcon/PostgresqlIcon";
import PrismaIcon from "@/components/icons/PrismaIcon/PrismaIcon";
import ReactQueryIcon from "@/components/icons/ReactQueryIcon/ReactQueryIcon";

export default function Footer(): JSX.Element {
  const iconColor: string = "#9ec8f3";
  const iconWidth: string = "40px";
  const iconHeight: string = "40px";

  const onIconClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLDivElement;
    const url: string = getUrl(target.classList.value);
    if (url !== "none") {
      window.open(url);
    } else {
      alert("An error occurred or the link is not available\nPlease try again");
    }
  };

  return (
    <>
      <div className={styles.lineContainer}>
        <div className={styles.line} />
      </div>
      <div className={styles.Footer}>
        <span className={styles.textTop}>This web page was built with</span>
        <div className={styles.iconContainer}>
          <div className={styles.icon} onClick={onIconClick}>
            <ReactIcon
              className={"reactIcon"}
              width={iconWidth}
              height={iconHeight}
              color={iconColor}
            />
          </div>
          <div className={styles.icon} onClick={onIconClick}>
            <TypescriptIcon
              className={"typescriptIcon"}
              width={iconWidth}
              height={iconHeight}
              color={iconColor}
            />
          </div>
          <div className={styles.icon} onClick={onIconClick}>
            <NextjsIcon
              className={"nextjsIcon"}
              width={iconWidth}
              height={iconHeight}
              color={iconColor}
            />
          </div>
          <div className={styles.icon} onClick={onIconClick}>
            <PostgresqlIcon
              className={"postgresqlIcon"}
              width={iconWidth}
              height={iconHeight}
              color={iconColor}
            />
          </div>
          <div className={styles.icon} onClick={onIconClick}>
            <PrismaIcon
              className={"prismaIcon"}
              width={iconWidth}
              height={iconHeight}
              color={iconColor}
            />
          </div>
          {/* <div className={styles.icon} onClick={onIconClick}>
            <ReactQueryIcon
              className={"reactqueryIcon"}
              width={iconWidth}
              height={iconHeight}
              color={iconColor}
            />
          </div> */}
        </div>

        <div className={styles.textBottom}>
          and deployed on Oracle Cloud and Docker
        </div>
        <div className={styles.versionInfo}>
          <span>App version {process.env.NEXT_PUBLIC_PROJECT_VERSION}</span>
        </div>
      </div>
    </>
  );
}

function getUrl(value: string) {
  switch (value) {
    case "reactIcon":
      return "https://reactjs.org/";

    case "typescriptIcon":
      return "https://www.typescriptlang.org/";

    case "nextjsIcon":
      return "https://nextjs.org/";

    case "postgresqlIcon":
      return "https://www.postgresql.org/";

    case "prismaIcon":
      return "https://www.prisma.io/";

    case "reactqueryIcon":
      return "https://react-query-v3.tanstack.com/";

    default:
      return "none";
  }
}

import { useEffect, useRef, forwardRef } from "react";
import styles from "./Projects.module.scss";
import ProjectList from "@/interface/ProjectList";

// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
// gsap.registerPlugin(ScrollTrigger);

interface Props {
  projectList: ProjectList[];
}

const Projects = forwardRef<HTMLDivElement, Props>((props, ref) => {
  const listRef = useRef<HTMLDivElement>(null);
  // useEffect(() => {
  //   gsap.fromTo(
  //     listRef.current,
  //     { opacity: 0 },
  //     {
  //       opacity: 1,
  //       duration: 1,
  //       delay: 0.5,
  //       scrollTrigger: {
  //         trigger: listRef.current,
  //         start: 1000,
  //       },
  //     }
  //   );
  // });

  const onProjectClick = (url: string, title: string) => {
    if (url !== "Confidential") {
      window.open(url);
    } else {
      window.open(`/workspace/${title}`);
    }
  };

  return (
    <div className={styles.Projects} id="Projects" ref={ref}>
      <div className={styles.projectsGlowText}>
        <span>Projects</span>
      </div>
      <div className={styles.bodyContainer}>
        <div className={styles.projectContainer} ref={listRef}>
          {props.projectList.map((project: ProjectList) => {
            return (
              <div
                className={styles.projectBox}
                key={project.id}
                onClick={() => {
                  onProjectClick(project.url, project.title);
                }}
              >
                <span className={styles.projectTitle}>{project.title}</span>
                <span className={styles.projectCat}>{project.category}</span>
                <span className={styles.projectDesc}>
                  {project.descriptionEng}
                </span>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                  className={styles.projectUrl}
                ></a>
              </div>
            );
          })}
        </div>
      </div>

      <div className={styles.container}></div>
    </div>
  );
});

Projects.displayName = "Projects";

export default Projects;

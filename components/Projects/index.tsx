import { useEffect, useRef, forwardRef } from "react";
import { useQueryClient } from "react-query";
import styles from "./Projects.module.scss";
import ProjectList from "@/interface/ProjectList";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

interface Props {
  props: null;
}

type ProjectObject = ProjectList[];

const Projects = forwardRef<HTMLDivElement, Props>((props, ref) => {
  const queryClient = useQueryClient();
  const projectList: ProjectObject | undefined = queryClient.getQueryData([
    "projectList",
  ]);

  const listRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    gsap.fromTo(
      listRef.current,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1,
        delay: 0.5,
        scrollTrigger: {
          trigger: listRef.current,
          start: 1000,
        },
      }
    );
  });

  return (
    <div className={styles.Projects} id="Projects" ref={ref}>
      <div className={styles.projectsGlowText}>
        <span>Projects</span>
      </div>
      <div className={styles.bodyContainer}>
        <div className={styles.projectContainer} ref={listRef}>
          {projectList?.map((project: ProjectList) => {
            return (
              <div
                className={styles.projectBox}
                key={project.id}
                onClick={() => {
                  window.open(project.url);
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

export default Projects;

import { useQueryClient } from "react-query";
import styles from "./Projects.module.scss";
import ProjectList from "@/interface/ProjectList";

type ProjectObject = ProjectList[];

export default function Projects(): JSX.Element {
  const queryClient = useQueryClient();
  const projectList: ProjectObject | undefined = queryClient.getQueryData([
    "projectList",
  ]);

  return (
    <>
      <div className={styles.Projects}>
        <div className={styles.projectsGlowText}>
          <span>Projects</span>
        </div>
        <div className={styles.projectContainer}>
          {projectList?.map((project: ProjectList) => {
            return (
              <div className={styles.projectBox} key={project.id}>
                <span>{project.title}</span>
                <span>{project.descriptionEng}</span>
                <span>{project.url}</span>
              </div>
            );
          })}
        </div>

        <div className={styles.container}></div>
      </div>
    </>
  );
}

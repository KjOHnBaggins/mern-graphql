import { useQuery } from "@apollo/client";
import Spinner from "./Spinner.jsx";
import { GET_PROJECTS } from "../queries/projectQueries.js";
import ProjectCard from "./ProjectCard.jsx";

function Projects() {
  const { loading, error, data } = useQuery(GET_PROJECTS);

  return (
    <>
      {data?.projects.length > 0 ? (
        <div className="row mt-4">
          {data.projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      ) : (
        <p>No Projects</p>
      )}
    </>
  );
}

export default Projects;

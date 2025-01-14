
//This is the first component of the project 
import Button from "./Button.jsx";
export default function ProjectSidebar({
  onStartAddProject, //this is switch the props to add the project 
  projects, //object containing project details
  onSelectProject, // to view the project details
  selectedProjectId,
}) {
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
        Your Projects
      </h2>
      <div>
        <Button onClick={onStartAddProject}>+ Add Project</Button>  
      </div>
      <ul>
        {projects.map((project) => {
          let cssClasses =
            "w-full text-left px-2 py-1 rounded-sm my-1 text-stone-400 hover:text-stone-400 hover:bg-stone-800";

          if (project.id === selectedProjectId) {
            cssClasses += " bg-stone-800 text-stone-200";
          } else {
            cssClasses += " text-stone-400";
          }

          return (
            //listing the projects on sidebar 
            <li key={project.id}>
              <button
                className={cssClasses} //this button is used to view the project
                onClick={() => onSelectProject(project.id)} // we pass the project id to get the exact project we need
              >
                {project.title}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}

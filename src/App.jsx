import { useState } from "react";
import ProjectSidebar from "./components/ProjectsSidebar.jsx";
import NewProject from "./components/NewProject.jsx";
import NoProjectSelected from "./components/NoProjectSelected.jsx";
import SelectedProject from "./components/SlectedProject.jsx";
import { preconnect } from "react-dom";
function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: [], //array stores the project
    tasks: [], // array stores the tasks
  });

  //function to add the tasks
  function handleAddTask(text) {
    //takes the input using refs
    setProjectState((prevState) => {
      //passsing the previous values
      const taskId = Math.random();
      const newTask = {
        text: text,
        projectId: prevState.selectedProjectId,
        id: taskId,
      };

      return {
        ...prevState, // destsructuring the previous project details to same object
        tasks: [newTask, ...prevState.tasks], //assigning the new tasks along with the old tasks using destructuring the array
      };
    });
  }

  //delete the Task
  function handleDeleteTask(id) {
    // Passing the id to delete that particular task
    setProjectState((prevState) => {
      return {
        ...prevState,
        tasks: prevState.tasks.filter(
          (task) => task.id !== id //filter method removes the data if it return false
        ),
      };
    });
  }

  //handling the select project by assigning the project id
  function handleSelectProject(id) {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: id,
      };
    });
  }

  //delete project
  function handleDeleteProject() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: prevState.projects.filter(
          (project) => project.id !== prevState.selectedProjectId //removes the data if it returns false i.e it only keeps the data which satisfies the condition
        ),
      };
    });
  }
  function handleStartProject() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  }

  //handle cancel button we just change the state here
  function handleCancelProject() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
      };
    });
  }

  function handleAddProject(projectData) {
    setProjectState((prevState) => {
      const newProject = {
        ...projectData,
        id: Math.random(),
      };

      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject],
      };
    });
  }

  const selectedProject = projectState.projects.find(
    (project) => project.id === projectState.selectedProjectId
  );

  let content = (
    <SelectedProject
      project={selectedProject} // pass the selected project details to display the project
      onDelete={handleDeleteProject} // passing the prop to delete ths project
      onAddTasks={handleAddTask} //prop drilling to add task
      onDeleteTasks={handleDeleteTask} // prop drilling to the task component to use onClick method
      tasks={projectState.tasks} //prop drilling to task component to view the tasks
    />
  );

  if (projectState.selectedProjectId === null) {
    // view the content component based on the condition - if the project is added or not
    content = (
      <NewProject onAdd={handleAddProject} onCancel={handleCancelProject} />
    );
  } else if (projectState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartProject} />;
  }
  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSidebar
        onStartAddProject={handleStartProject}
        projects={projectState.projects} // passing projects to display in the sidebar
        onSelectProject={handleSelectProject}
        slectedProjectId={projectState.selectedProjectId} // passing the project id which help to view the exact project
      />
      {content}
    </main>
  );
}

export default App;

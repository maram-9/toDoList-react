import Form from './Form';
import Buttons from './Buttons';
import Section from '../../common/Section';
import Header from '../../common/Header';
import Container from '../../common/Container/styled';
import TaskList from "./TaskList";
import { useTasks } from "../../useTasks";
//import { useSelector } from "react-redux";

function Tasks() {
  //const { tasks }= useSelector(selectTasks);

  const {
    tasks,
    removeTask,
    toggleTaskDone,
    setAllDone,
    addNewTask, 
    toggleHideDone,
    hideDone, 
  } = useTasks();

  return (
    <Container>
     <Header title="Lista zadan" />
     <Section 
      title="Dodaj nowe zadanie" 
      body={<Form addNewTask={addNewTask} />} 
    />
     <Section
      title="Lista zadan"
      body={
        <TaskList 
        tasks={tasks} 
        hideDone={hideDone}
        removeTask={removeTask}
        toggleTaskDone={toggleTaskDone} 
        />}
      extraHeaderContent={<
        Buttons 
        tasks={tasks} 
        hideDone={hideDone}
        toggleHideDone={toggleHideDone}
        setAllDone={setAllDone} 
        />}
     />
    </Container>
  );
}

export default Tasks;
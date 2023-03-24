import Form from './Form';
import Tasks from './Tasks';
import Buttons from './Buttons';
import Section from './Section';
import Header from './Header';
import Container from './Container/styled';
import { useTasks } from "./useTasks";

function App() {

  const {
    tasks,
    removeTask,
    toggleTaskDone,
    setAllDone,
    addNewTask, 
    toggleHideDoneTasks,
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
        <Tasks 
        tasks={tasks} 
        hideDone={hideDone}
        removeTask={removeTask}
        toggleTaskDone={toggleTaskDone} 
        />}
      extraHeaderContent={<
        Buttons 
        tasks={tasks} 
        hideDone={hideDone}
        toggleHideDoneTasks={toggleHideDoneTasks}
        setAllDone={setAllDone} 
        />}
     />
    </Container>
  );
}

export default App;
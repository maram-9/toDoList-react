import Form from './Form';
import Tasks from './Tasks';
import Buttons from './Buttons';
import Section from './Section';
import Header from './Header';
import Container from './Container';
import { useState } from 'react';
import { useTasks } from "./useTasks";

function App() {
  const [hideDoneTasks, setHideDoneTasks] = useState(false);

  const toggleHideDoneTasks = () => {
    setHideDoneTasks(hideDoneTasks => !hideDoneTasks);
  };

  const {
    tasks,
    removeTask,
    toggleTaskDone,
    setAllDone,
    addNewTask,
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
        hideDoneTasks={hideDoneTasks}
        removeTask={removeTask}
        toggleTaskDone={toggleTaskDone} 
        />}
      extraHeaderContent={<
        Buttons 
        tasks={tasks} 
        hideDoneTasks={hideDoneTasks}
        toggleTaskDone={toggleTaskDone} 
        setAllDone={setAllDone} 
        />}
     />
    </Container>
  );
}

export default App;

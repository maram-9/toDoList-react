import Form from './Form';
import Buttons from './Buttons';
import Section from '../../../common/Section';
import Header from '../../../common/Header';
import Container from '../../../common/Container/styled';
import TaskList from "./TaskList";
import Search from "./Search";
import FetchExampleTasksButton from './FetchExampleTasksButton'


function TasksPage() {
  return (
    <Container>
     <Header title="Lista zadan" />
     <Section 
      title="Dodaj nowe zadanie"
      extraHeaderContent={<FetchExampleTasksButton />} 
      body={<Form />} 
    />
     <Section
      title="Wyszukiwarka"
      body={<Search />}
     /> 
     <Section
        title="Lista zadan"
        body={<TaskList />}
        extraHeaderContent={<Buttons />}
     /> 
    </Container>
  );
}

export default TasksPage;
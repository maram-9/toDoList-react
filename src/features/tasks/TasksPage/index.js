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
     <Header title="To do list" />
     <Section 
      title="Add new tasks"
      extraHeaderContent={<FetchExampleTasksButton />} 
      body={<Form />} 
    />
     <Section
      title="Search engine"
      body={<Search />}
     /> 
     <Section
        title="Tasks list"
        body={<TaskList />}
        extraHeaderContent={<Buttons />}
     /> 
    </Container>
  );
}

export default TasksPage;
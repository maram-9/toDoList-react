import Form from './Form';
import Buttons from './Buttons';
import Section from '../../common/Section';
import Header from '../../common/Header';
import Container from '../../common/Container/styled';
import TaskList from "./TaskList";

function Tasks() {
  return (
    <Container>
     <Header title="Lista zadan" />
     <Section 
      title="Dodaj nowe zadanie" 
      body={<Form />} 
    />
     <Section
        title="Lista zadan"
        body={<TaskList />}
        extraHeaderContent={<Buttons />}
     /> 
    </Container>
  );
};

export default Tasks;
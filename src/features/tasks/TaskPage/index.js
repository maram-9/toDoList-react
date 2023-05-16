import { useParams } from "react-router-dom";
import { getTaskById } from "../tasksSlice";
import { useSelector } from "react-redux";
import Section from '../../../common/Section';
import Header from '../../../common/Header';
import Container from '../../../common/Container/styled';

function TaskPage() {
  const { id } = useParams();
  const task = useSelector(state => getTaskById(state, id));

  return (
    <Container>
     <Header title="Szczegoly zadania" />
     <Section 
      title={task ? task.content : "Sorry, nie ma takiego zadania!"}
      body={!!task && (
      <><strong>Ukonczono:</strong> {task.done ? "Tak" : "Nie"}</>
      )} 
    />
    </Container>
  );
};

export default TaskPage;
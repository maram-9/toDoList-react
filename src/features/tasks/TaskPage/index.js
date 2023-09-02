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
     <Header title="Task details" />
     <Section 
      title={task ? task.content : "Sorry, there is no such task!"}
      body={!!task && (
      <><strong>Completed:</strong> {task.done ? "Yes" : "No"}</>
      )} 
    />
    </Container>
  );
};

export default TaskPage;
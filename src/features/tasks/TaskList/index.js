import { useSelector, useDispatch } from "react-redux";
import { List, Item, Content, ToggleDoneButton, RemoveButton } from './styled';
import { selectTasks, toggleTaskDone, removeTask, selectHideDone} from '../tasksSlice';

const TaskList = () => {
  const tasks = useSelector(selectTasks);
  const hideDone = useSelector(selectHideDone);
  const dispatch = useDispatch();

  return (
    <List>
      {tasks.map(task => (
        <Item key={task.id} 
          hidden={task.done && hideDone}
        >
          <ToggleDoneButton
            toggleDone
            onClick={() => dispatch(toggleTaskDone(task.id))}
          >
            {task.done ? "✔" : ""}
          </ToggleDoneButton>
          <Content done={task.done}>
            {task.content}
          </Content>
          <RemoveButton
              removeTask 
              onClick={() => dispatch(removeTask(task.id))}
            >
              🗑
            </RemoveButton>
        </Item>
    ))}
  </List>
  )
};

export default TaskList; 
import { useSelector, useDispatch } from 'react-redux';
import { Wrapper, Button } from './styled';
import { 
    toggleHideDone, 
    selectAreTasksEmpty, 
    selectHideDone, 
    selectIsEveryTaskDone, 
    setAllDone, 
    fetchExampleTasks,
} from '../../tasksSlice';

const Buttons = () => {
    const areTasksEmpty = useSelector(selectAreTasksEmpty);
    const isEveryTaskDone = useSelector(selectIsEveryTaskDone);
    const hideDone = useSelector(selectHideDone);
    const dispatch = useDispatch();
    
    return (
            <Wrapper>
                {!areTasksEmpty && (
                <>
                    <Button onClick={() => dispatch(fetchExampleTasks())}>
                        Pobierz przykladowe zadania 
                    </Button>
                    <Button onClick={() => dispatch(toggleHideDone())}>
                        {hideDone ? "Pokaż" : "Ukryj"} ukończone
                    </Button>
                    <Button
                        onClick={() => dispatch(setAllDone())}
                        disabled={isEveryTaskDone}
                    >
                        Ukończ wszystkie
                    </Button>
                    </>
                )}
            </Wrapper>
        );
};

export default Buttons;
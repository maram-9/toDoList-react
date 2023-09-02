import { useSelector, useDispatch } from 'react-redux';
import { Wrapper, Button } from './styled';
import { 
    toggleHideDone, 
    selectAreTasksEmpty, 
    selectHideDone, 
    selectIsEveryTaskDone, 
    setAllDone, 
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
                    <Button onClick={() => dispatch(toggleHideDone())}>
                        {hideDone ? "Show" : "Hide"} completed
                    </Button>
                    <Button
                        onClick={() => dispatch(setAllDone())}
                        disabled={isEveryTaskDone}
                    >
                        Complete all
                    </Button>
                    </>
                )}
            </Wrapper>
        );
};

export default Buttons;
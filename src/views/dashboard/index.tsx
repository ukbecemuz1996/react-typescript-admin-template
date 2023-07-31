import { Box, Button } from '@mui/material';
import { useAppDispatch } from '../../hooks/store';
import { showToast } from '../../store/toast.slice';

const Dashboard = () => {
    const dispatch = useAppDispatch();

    const openToast = () => {
        dispatch(
            showToast({
                message: 'Hello World',
                variant: 'error',
                open: true,
            })
        );
    };

    return (
        <Box>
            <Button onClick={openToast}>Open Toast</Button>
        </Box>
    );
};

export default Dashboard;

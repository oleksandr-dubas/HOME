import {useNavigate} from 'react-router-dom';
import {Box, CircularProgress, Stack, Typography} from '@mui/material';
import CenteredBox from '../../ui/CenteredBox';
import BackButton from '../../ui/BackButton';

const LoadingResult = () => {
    return (
        <Box sx={{height: "100%", width: "100%", position: "relative"}}>
            <CenteredBox>
                <Stack alignItems="center">
                    <Box p="50px">
                        <CircularProgress size="100px"/>
                    </Box>
                    <Typography variant="h3">The model is running...</Typography>
                    <Typography>Please wait. Results will be displayed soon</Typography>
                </Stack>
            </CenteredBox>
            <BackButton styles={{position: "absolute", top: "0", left: "0"}}/>
        </Box>
    );
};

export default LoadingResult;

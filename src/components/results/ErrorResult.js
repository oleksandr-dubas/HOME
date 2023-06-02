import {Box, Stack, Typography} from '@mui/material';
import {X} from 'react-feather';
import CenteredBox from '../../ui/CenteredBox';
import BackButton from '../../ui/BackButton';

const ErrorResult = () => {
    return (
        <Box sx={{height: "100%", width: "100%", position: "relative"}}>
            <CenteredBox>
                <Stack alignItems="center">
                    <X size="200px" color="#d64c63"/>
                    <Typography variant="h3">Something went wrong...</Typography>
                    <Typography>The model aborted. Please try again</Typography>
                </Stack>
            </CenteredBox>
            <BackButton styles={{position: "absolute", top: "0", left: "0"}}/>
        </Box>
    );
};

export default ErrorResult;

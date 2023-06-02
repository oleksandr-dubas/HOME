import {useNavigate} from 'react-router-dom';
import {Button} from '@mui/material';
import {ArrowLeft} from 'react-feather';

const BackButton = ({styles = {}}) => {
    const navigate = useNavigate();

    return (
        <Button
            variant="outlined"
            onClick={() => navigate('/')}
            startIcon={<ArrowLeft/>}
            sx={{...styles}}
        >
            Back
        </Button>
    );
};

export default BackButton;

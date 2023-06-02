import {Box} from '@mui/material';

import styled from '@emotion/styled';

const Centered = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const CenteredBox = (props) => {
    return (
        <Centered sx={{...props.sx}}>
            {props.children}
        </Centered>
    );
};

export default CenteredBox;

import {Box} from '@mui/material';

import styled from '@emotion/styled';

const MainWrapper = styled(Box)`
  background-color: ${props => props.theme.palette.primary.light};
  height: 100%;
  width: 100%;
  padding: 10px 10%;
`;

const App = ({children}) => {
    return (
        <MainWrapper>
            {children}
        </MainWrapper>
    );
};

export default App;

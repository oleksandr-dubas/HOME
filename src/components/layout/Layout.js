import {useContext} from 'react';
import {useNavigate} from 'react-router-dom';
import {Box, Grid, Typography, TextField, MenuItem} from '@mui/material';
import {Context} from '../../context/Context';
import {Loader, X, Check} from 'react-feather';
import CenteredBox from '../../ui/CenteredBox';
import BackButton from '../../ui/BackButton';
import {ModelStatus} from '../../context/Context';
import logo from '../../logo.png';

import styled from '@emotion/styled';

const Wrapper = styled(Box)`
  width: 100%;
  padding: 1rem;
  background-color: #d9faff;
`;

const Layout = ({home = true}) => {
    const navigate = useNavigate();
    const {models} = useContext(Context);

    return (
        <Wrapper sx={{position: "relative"}}>
            <Grid container spacing={2}>
                <Grid item xs={3}>
                    <img width="100%" src={logo} alt="logo"/>
                </Grid>
                <Grid item xs={6}>
                    <CenteredBox>
                        <Typography variant="h5">
                            Quando ambulabat agendis admonere te qualis actio. Si ad corpus, quae plerumque
                            Imaginare tecum in balineo quidam aquam fundes aliquod discrimen vituperiis usum alii
                            furantur.
                        </Typography>
                    </CenteredBox>
                </Grid>
                <Grid item xs={3} sx={{display: "flex", justifyContent: "flex-end"}}>
                    {home && <TextField select label="Models" defaultValue="" size="small" sx={{width: "120px"}}>
                        {models.map(model => {
                            return <MenuItem
                                key={model.id}
                                value={model.name}
                                onClick={() => navigate(`/model/${model.id}`)}
                            >
                                {model.status === ModelStatus.FAILED && <X color="#d64c63"/>}
                                {model.status === ModelStatus.LOADING && <Loader color="#00204a"/>}
                                {model.status === ModelStatus.READY && <Check color="green"/>}
                                {model.name}
                            </MenuItem>
                        })}
                    </TextField>}
                </Grid>
            </Grid>
            {!home && <BackButton styles={{position: "absolute", top: "0", left: "0"}}/>}
        </Wrapper>
    );
};

export default Layout;

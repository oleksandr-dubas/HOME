import styled from '@emotion/styled';
import {Button, Grid, LinearProgress, Tooltip, Typography} from '@mui/material';
import {useNavigate} from 'react-router-dom';
import {useContext} from 'react';
import {Context} from '../../context/Context';

const HR = styled.hr`
  background-color: ${props => props.theme.palette.primary.main};
  color: ${props => props.theme.palette.primary.main};
  border: none;
  border-radius: 3px;
  height: 2px;
`;

const BarGrid = styled(Grid)`
  width: 100%;
  padding: 1rem 0;
`;

const InfoBar = ({model = undefined, onBtnClick}) => {
    const navigate = useNavigate();
    const {inputs, filledInputs} = useContext(Context);

    return (
        <>
            <HR/>
            <BarGrid container spacing={2} alignItems="center">
                <Grid item xs={3}>
                    <Typography variant="h5">{!model ? "Add data for Input" : "Output"}</Typography>
                </Grid>
                <Grid item xs={6} textAlign="center">
                    {!model ? (
                        <Tooltip
                            placement="top"
                            title={Math.round(100 * filledInputs / inputs.length) + '%'}
                        >
                            <LinearProgress
                                variant="determinate"
                                value={100 * filledInputs / inputs.length}
                                sx={{height: 10, borderRadius: 5}}
                            />
                        </Tooltip>
                    ) : <Typography variant="h4">{model.name}</Typography>}
                </Grid>
                <Grid item xs={3}>
                    <Tooltip
                        arrow
                        title={
                            !model && filledInputs !== inputs.length ?
                                "Model can only be run when every data tab is filled" :
                                ""
                        }
                    >
                        <span>
                            <Button
                                variant="contained"
                                color="primary"
                                disabled={!model && filledInputs !== inputs.length}
                                fullWidth
                                onClick={onBtnClick}
                            >
                                {!model ? "Run Model" : "Save as PDF"}
                            </Button>
                        </span>
                    </Tooltip>
                </Grid>
            </BarGrid>
            <HR/>
        </>
    );
};

export default InfoBar;

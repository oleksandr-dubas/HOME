import {useContext, useEffect, useState} from 'react';
import {Box, Button, IconButton, Stack, Typography} from '@mui/material';
import {DataGrid, useGridApiRef} from '@mui/x-data-grid';
import Papa from 'papaparse';
import {Trash2} from 'react-feather';
import {Context} from '../../context/Context';
import CenteredBox from '../../ui/CenteredBox';

const TabPanel = (props) => {
    const {children, index, file, ...other} = props;
    const [selectedRows, setSelectedRows] = useState([]);
    const {inputs, addInput, removeInput} = useContext(Context);
    const data = inputs[index];
    const isEmpty = Object.keys(data).length === 0;
    const apiRef = useGridApiRef();

    useEffect(() => {
        let gridState;
        if (apiRef && apiRef.current) {
            gridState = apiRef.current;
        }

        return () => {
            if (data.columns && gridState && gridState.state && !apiRef.deleted) {
                addInput({
                    rows: Object.values(gridState.state.rows.dataRowIdToModelLookup),
                    columns: data.columns,
                }, index);
            }
        };
    }, [data]);

    const parseCSVFile = (event) => {
        Papa.parse(event.target.files[0], {
            header: true,
            skipEmptyLines: true,
            complete: function (results) {
                const columns = getColumns(results.data);
                const rows = getRows(results.data);
                apiRef.deleted = false;
                addInput({
                    columns: columns,
                    rows: rows
                }, index);
            },
        });
    };

    const getColumns = (data) => {
        const columns = [];
        for (const key in data[0]) {
            columns.push({field: key, headerName: key, width: 100, sortable: false, editable: true});
        }
        return columns;
    };

    const getRows = (data) => {
        return data.map((row, index) => {
            return {...row, id: index};
        });
    };

    return (
        <div
            role="tabpanel"
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            <Box sx={{p: 3}}>
                {isEmpty ? (
                    <CenteredBox sx={{flexDirection: "column", pt: 12}}>
                        <Typography variant="h6">There is no data here</Typography>
                        <Typography variant="h6">
                            Please
                            <Button component="label">
                                upload
                                <input hidden type="file" accept=".csv" onChange={parseCSVFile}/>
                            </Button>
                            file with data
                        </Typography>
                        <Typography variant="h6">
                            <Button component="label">
                                <a href={file} target="_blank" rel="noreferrer" download>
                                    download
                                </a>
                            </Button>
                            file sample
                        </Typography>
                    </CenteredBox>
                ) : (
                    <Stack direction="column" spacing={2}>
                        <Stack
                            direction="row"
                            justifyContent="space-between"
                            alignItems="center"
                            spacing={2}
                        >
                            <IconButton
                                disabled={!selectedRows.length}
                                onClick={() => {
                                    apiRef.current.setRows(Object.values(apiRef.current.state.rows.dataRowIdToModelLookup).filter((row) => !selectedRows.includes(row.id)))
                                }}
                            >
                                <Trash2/>
                            </IconButton>
                            <Button
                                variant="contained"
                                color="error"
                                onClick={() => {
                                    removeInput(index);
                                    apiRef.deleted = true;
                                }}
                            >
                                Delete
                            </Button>
                        </Stack>
                        <Box sx={{height: 470}}>
                            <DataGrid
                                apiRef={apiRef}
                                onStateChange={(state) => setSelectedRows(state.rowSelection)}
                                sx={{
                                    boxShadow: 2,
                                    border: 2,
                                    borderColor: 'primary.dark',
                                    '& .MuiDataGrid-columnHeaders': {
                                        borderBottom: 2,
                                        borderColor: 'primary.dark',
                                    },
                                    '& .MuiDataGrid-columnHeader': {
                                        border: 'none',
                                    },
                                    '& .MuiDataGrid-columnHeader:focus': {
                                        outline: 'none',
                                    },
                                    '& .MuiDataGrid-cell': {
                                        border: 'none',
                                    },
                                    '& .MuiDataGrid-row': {
                                        borderBottom: 1,
                                        borderColor: 'primary.dark',
                                    },
                                    '& .MuiDataGrid-footerContainer': {
                                        borderTop: 1,
                                    },
                                    '& .MuiDataGrid-cell:hover': {
                                        color: 'primary.main',
                                    },
                                    '& .MuiDataGrid-cell:focus': {
                                        outline: 'none',
                                    },
                                }}
                                columns={data.columns}
                                rows={data.rows}
                                rowHeight={45}
                                pageSizeOptions={[]}
                                checkboxSelection
                                disableColumnMenu
                                disableRowSelectionOnClick
                            />
                        </Box>
                    </Stack>
                )}
            </Box>
        </div>
    );
};

export default TabPanel;

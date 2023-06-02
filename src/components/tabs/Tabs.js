import {useState} from 'react';
import {Box, Tab, Tabs} from '@mui/material';
import TabPanel from './TabPanel';

const a11yProps = (index) => {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
};

const BasicTabs = () => {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{width: '100%'}}>
            <Box sx={{borderBottom: 2, borderColor: 'divider'}}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="RHY Profiles" {...a11yProps(0)} />
                    <Tab label="RHY Needs" {...a11yProps(1)} />
                    <Tab label="Shelter Profiles" {...a11yProps(2)} />
                    <Tab label="Shelter Services" {...a11yProps(3)} />
                    <Tab label="Potential Shelter Profiles" {...a11yProps(4)} />
                    <Tab label="Potential Shelter Services" {...a11yProps(5)} />
                </Tabs>
            </Box>
            {value === 0 && <TabPanel index={0} file={"https://drive.google.com/uc?export=download&id=1ISJebmI6ocuVN15HyZptGcNPdjumLVz4"}>
                RHY Profiles
            </TabPanel>}
            {value === 1 && <TabPanel index={1} file={"https://drive.google.com/uc?export=download&id=1QMcerG8-Kofo4e4I8lvwXUS3yXOoKtMb"}>
                RHY Needs
            </TabPanel>}
            {value === 2 && <TabPanel index={2} file={"https://drive.google.com/uc?export=download&id=1zMusxg9uUcWEOb0XB0125zgQqi8A90v-"}>
                Shelter Profiles
            </TabPanel>}
            {value === 3 && <TabPanel index={3} file={"https://drive.google.com/uc?export=download&id=1pjDunLw42Yip3CN7HoCyO_f3o4GNRPJ5"}>
                Shelter Services
            </TabPanel>}
            {value === 4 && <TabPanel index={4} file={"https://drive.google.com/uc?export=download&id=1sgmIjYjFus8DyQ8FLQwMjy42cbuKanyY"}>
                Potential Shelter Profiles
            </TabPanel>}
            {value === 5 && <TabPanel index={5} file={"https://drive.google.com/uc?export=download&id=1PsnK0ZdtSxmVgxWxIr0-H1R6ZiyfOBFI"}>
                Potential Shelter Services
            </TabPanel>}
        </Box>
    );
};

export default BasicTabs;

import {Typography, useTheme} from '@mui/material';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import Layout from '../layout/Layout';
import InfoBar from '../layout/InfoBar';

const result = JSON.parse(require('../../files/output/model2_output.json'));

const SuccessResult = ({model}) => {
    const theme = useTheme();

    const AccordionItemButtonStyle = {
        backgroundColor: theme.palette.primary.light,
    };

    return (
        <>
            <Layout home={false}/>
            <InfoBar model={model}/>
            <Accordion allowMultipleExpanded allowZeroExpanded>
                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton style={AccordionItemButtonStyle}>
                            <Typography variant="h4" sx={{display: "inline"}}>General Information</Typography>
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <p>
                            Exercitation in fugiat est ut ad ea cupidatat ut in
                            cupidatat occaecat ut occaecat consequat est minim minim
                            esse tempor laborum consequat esse adipisicing eu
                            reprehenderit enim.
                        </p>
                    </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton style={AccordionItemButtonStyle}>
                            <Typography variant="h4" sx={{display: "inline"}}>Referrals Information</Typography>
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <p>
                            In ad velit in ex nostrud dolore cupidatat consectetur
                            ea in ut nostrud velit in irure cillum tempor laboris
                            sed adipisicing eu esse duis nulla non.
                        </p>
                    </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton style={AccordionItemButtonStyle}>
                            <Typography variant="h4" sx={{display: "inline"}}>New Shelters Recommendation</Typography>
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <p>
                            In ad velit in ex nostrud dolore cupidatat consectetur
                            ea in ut nostrud velit in irure cillum tempor laboris
                            sed adipisicing eu esse duis nulla non.
                        </p>
                    </AccordionItemPanel>
                </AccordionItem>
            </Accordion>
        </>
    );
};

export default SuccessResult;

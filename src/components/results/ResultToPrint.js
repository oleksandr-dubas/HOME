import {forwardRef} from 'react';
import {useTheme} from '@mui/material';
import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography} from '@mui/material';
import {
    Accordion,
    AccordionItem,
    AccordionItemButton,
    AccordionItemHeading,
    AccordionItemPanel
} from 'react-accessible-accordion';

const ResultToPrint = forwardRef((props, ref) => {
    const {result} = props;
    const theme = useTheme();

    const AccordionItemButtonStyle = {
        backgroundColor: theme.palette.primary.light,
    };

    return (
        <div id="result" ref={ref}>
            <Accordion allowMultipleExpanded allowZeroExpanded>
                <AccordionItem className="html2pdf__page-break">
                    <AccordionItemHeading>
                        <AccordionItemButton style={AccordionItemButtonStyle}>
                            <Typography variant="h4" sx={{display: "inline"}}>General Information</Typography>
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <TableContainer component={Paper}>
                            <Table sx={{width: "100%"}}>
                                <TableBody>
                                    <TableRow>
                                        <TableCell>Benefit to Cost Ratio</TableCell>
                                        <TableCell>{Math.round(result.ratioVal)}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Total bed appointments</TableCell>
                                        <TableCell>{result.BedTotal}</TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem className="html2pdf__page-break">
                    <AccordionItemHeading>
                        <AccordionItemButton style={AccordionItemButtonStyle}>
                            <Typography variant="h4" sx={{display: "inline"}}>Referrals Information</Typography>
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <TableContainer component={Paper}>
                            <Table sx={{width: "100%"}}>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Referral</TableCell>
                                        <TableCell>Number of referral appoints</TableCell>
                                        <TableCell>Appoints available</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {result.ReferralSystemResults.map((el, index) => (
                                        <TableRow key={index}>
                                            <TableCell>{index + 1}</TableCell>
                                            <TableCell>{el[0]}</TableCell>
                                            <TableCell>{el[1]}</TableCell>
                                        </TableRow>
                                    ))}
                                    <TableRow>
                                        <TableCell>Total</TableCell>
                                        <TableCell>{result.TotalReferralAssignment}</TableCell>
                                        <TableCell></TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton style={AccordionItemButtonStyle}>
                            <Typography variant="h4" sx={{display: "inline"}}>New Shelters Recommendation</Typography>
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <TableContainer component={Paper}>
                            <Table sx={{width: "100%"}}>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Parent Organization</TableCell>
                                        <TableCell>Shelter Location</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {result.openedShelterInfo.map((el, index) => (
                                        <TableRow key={index}>
                                            <TableCell>{el[2]}</TableCell>
                                            <TableCell>{el[1]}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </AccordionItemPanel>
                </AccordionItem>
            </Accordion>
        </div>
    )
});

export default ResultToPrint;

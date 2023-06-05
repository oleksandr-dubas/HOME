import {useRef} from 'react';
import {useReactToPrint} from 'react-to-print';
import html2pdf from 'html2pdf.js';
import Layout from '../layout/Layout';
import InfoBar from '../layout/InfoBar';
import ResultToPrint from './ResultToPrint';

const result = Object.values(JSON.parse(require('../../files/output/model2_output.json')))[0];

const SuccessResult = ({model}) => {
    const printRef = useRef();

    const handlePrint = useReactToPrint({
        content: () => printRef.current,
        documentTitle: `${model.name}.pdf`,
        copyStyles: true,
        print: async (printIframe) => {
            const document = printIframe.contentDocument;
            if (document) {
                const html = document.getElementsByTagName('html')[0];
                await html2pdf().from(html).save(`${model.name}.pdf`);
            }
        },
    });

    return (
        <>
            <Layout home={false}/>
            <InfoBar model={model} onBtnClick={handlePrint}/>
            <ResultToPrint result={result} ref={printRef}/>
        </>
    );
};

export default SuccessResult;

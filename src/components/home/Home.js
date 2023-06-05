import {useNavigate} from 'react-router-dom';
import Layout from '../../components/layout/Layout';
import InfoBar from '../layout/InfoBar';
import BasicTabs from '../../components/tabs/Tabs';

const Home = () => {
    const navigate = useNavigate();

    return (
        <>
            <Layout/>
            <InfoBar onBtnClick={() => navigate("/model/2")}/>
            <BasicTabs/>
        </>
    );
};

export default Home;

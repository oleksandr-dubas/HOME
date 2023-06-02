import {useContext} from 'react';
import {useParams, Navigate} from 'react-router-dom';
import {Context} from '../../context/Context';
import SuccessResult from './SuccessResult';
import LoadingResult from './LoadingResult';
import ErrorResult from './ErrorResult';
import {ModelStatus} from '../../context/Context';

const ModelResult = () => {
    const {models} = useContext(Context);
    const {id} = useParams();

    const model = models.find(model => model.id.toString() === id);

    if (!model) {
        return <Navigate to="/"/>;
    }

    return (
        <>
            {model.status === ModelStatus.LOADING && <LoadingResult/>}
            {model.status === ModelStatus.FAILED && <ErrorResult/>}
            {model.status === ModelStatus.READY && <SuccessResult model={model}/>}
        </>
    );
};

export default ModelResult;

import {createContext, useReducer} from "react";

export const ModelStatus = {
    LOADING: "loading",
    FAILED: "failed",
    READY: "ready",
};

const initialState = {
    inputs: [{}, {}, {}, {}, {}, {}],
    filledInputs: 0,
    models: [
        {
            id: 0,
            name: "Model 1",
            status: ModelStatus.LOADING,
        },
        {
            id: 1,
            name: "Model 2",
            status: ModelStatus.FAILED,
        },
        {
            id: 2,
            name: "Model 3",
            status: ModelStatus.READY,
        },
    ],
};

const Reducer = (state, action) => {
    switch (action.type) {
        case "ADD_INPUT":
            return {
                ...state,
                inputs: state.inputs.map((input, index) => {
                    if (index === action.index) {
                        return action.input;
                    }
                    return input;
                }),
                filledInputs: state.filledInputs + 1,
            };
        case "UPDATE_INPUT":
            return {
                ...state,
                inputs: state.inputs.map((input, index) => {
                    if (index === action.index) {
                        return action.input;
                    }
                    return input;
                }),
            };
        case "REMOVE_INPUT":
            return {
                ...state,
                inputs: state.inputs.map((input, index) => {
                    if (index === action.index) {
                        return {};
                    }
                    return input;
                }),
                filledInputs: state.filledInputs - 1,
            };
        default:
            return state;
    }
};

const Context = createContext(null);

const Provider = ({children}) => {
    const [state, dispatch] = useReducer(Reducer, initialState);

    const addInput = (input, index) => {
        if (Object.keys(state.inputs[index]).length === 0) {
            dispatch({type: "ADD_INPUT", input, index});
        } else {
            dispatch({type: "UPDATE_INPUT", input, index});
        }
    };

    const removeInput = (index) => {
        dispatch({type: "REMOVE_INPUT", index});
    };

    return (
        <Context.Provider value={{...state, addInput, removeInput}}>
            {children}
        </Context.Provider>
    );
};

export {Context, Provider};

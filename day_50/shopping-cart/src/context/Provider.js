import { useReducer } from 'react';
import reducer, { initState } from '../store/reducer';
import Context from './Context';

function Provider({ children }) {
    const [state, dispatch] = useReducer(reducer, initState);

    const value = {
        state,
        dispatch,
    };

    return <Context.Provider value={value}>{children}</Context.Provider>;
}

export default Provider;

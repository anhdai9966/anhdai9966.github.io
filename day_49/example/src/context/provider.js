import Context from './context'
import reducer, { initalState } from '../store/reducer'
import { useReducer } from 'react'

function Provider({ children }) {
    const [todos, dispatch] = useReducer(reducer, initalState);

    return (
        <Context.Provider value={{ todos, dispatch }}>
            {children}
        </Context.Provider>
    )
}

export default Provider
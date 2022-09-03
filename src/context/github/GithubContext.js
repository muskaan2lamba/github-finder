import { createContext, useReducer } from "react";
import githubReducer from "./GithubReducer";

const GithubContext = createContext()

export const GithubProvider = ({children}) => {

    //Using reducer instead of state
    const initialState = {
        users: [],
        user: {},
        repos: [],
        loading: false
    }

    const [state, dispatch] = useReducer(githubReducer, initialState)

    return <GithubContext.Provider value = {{
        ...state,
        dispatch
    }}>
        {children}
    </GithubContext.Provider>
}

export default GithubContext
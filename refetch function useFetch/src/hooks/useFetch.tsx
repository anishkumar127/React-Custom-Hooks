
import { useReducer, useEffect } from 'react';
import axios from 'axios';

interface State {
    data: any[]; // array of objects
    loading: boolean;
    error: any;
}

interface Action {
    type: string;
    payload?: any;
}

const ACTIONS = {
    API_REQUEST: "api-request",
    FETCH_DATA: "fetch-data",
    ERROR: "error"
}

const initialState: State = {
    data: [],
    loading: false,
    error: null
}

const reducer = (state: State, { type, payload }: Action): State => {
    switch (type) {
        case ACTIONS.API_REQUEST:
            return { ...state, data: [], loading: true };

        case ACTIONS.FETCH_DATA:
            return { ...state, data: payload, loading: false };

        case ACTIONS.ERROR:
            return { ...state, data: [], error: payload };

        default:
            return state;
    }
}

export const useFetch = (url: string): { state: State; refetch: () => Promise<void> } => {
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        let isCancelled = false;

        const fetchData = async (): Promise<void> => {
            dispatch({ type: ACTIONS.API_REQUEST });
            try {
                const response = await axios.get(url);
                if (!isCancelled) {
                    dispatch({ type: ACTIONS.FETCH_DATA, payload: response.data });
                }
            } catch (err) {
                if (!axios.isCancel(err) && !isCancelled) {
                    dispatch({ type: ACTIONS.ERROR, payload: err });
                }
            }
        };

        fetchData();

        return () => {
            isCancelled = true;
        };
    }, [url]);

    const refetch = async (): Promise<void> => {
        dispatch({ type: ACTIONS.API_REQUEST });
        try {
            const response = await axios.get(url);
            dispatch({ type: ACTIONS.FETCH_DATA, payload: response.data });
        } catch (err) {
            if (!axios.isCancel(err)) {
                dispatch({ type: ACTIONS.ERROR, payload: err });
            }
        }
    };

    return { state, refetch };
};

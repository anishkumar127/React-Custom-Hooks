import { useReducer, useEffect, useRef } from 'react';
import axios, { CancelTokenSource } from 'axios';

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

// export const useFetch = (url: string): { state: State; refetch: () => Promise<void> } => {
//     const [state, dispatch] = useReducer(reducer, initialState);
//     let cancelTokenSource: CancelTokenSource;

//     useEffect(() => {
//         cancelTokenSource = axios.CancelToken.source();

//         const fetchData = async (): Promise<void> => {
//             dispatch({ type: ACTIONS.API_REQUEST });
//             try {
//                 const response = await axios.get(url, {
//                     cancelToken: cancelTokenSource.token
//                 });
//                 dispatch({ type: ACTIONS.FETCH_DATA, payload: response.data });
//             } catch (err) {
//                 if (!axios.isCancel(err)) {
//                     dispatch({ type: ACTIONS.ERROR, payload: err });
//                 }
//             }
//         }

//         fetchData();

//         return () => {
//             if (cancelTokenSource) {
//                 cancelTokenSource.cancel();
//             }
//         };
//     }, [url]);

//     const refetch = async () => {
//         dispatch({ type: ACTIONS.API_REQUEST });
//         try {
//             const response = await axios.get(url, {
//                 cancelToken: cancelTokenSource.token
//             });
//             dispatch({ type: ACTIONS.FETCH_DATA, payload: response.data });
//         } catch (err) {
//             if (!axios.isCancel(err)) {
//                 dispatch({ type: ACTIONS.ERROR, payload: err });
//             }
//         }
//     }
//     return { state, refetch };
// }

// export const useFetch = (url: string): { state: State; refetch: () => Promise<void> } => {
//     const [state, dispatch] = useReducer(reducer, initialState);

//     useEffect(() => {
//         let cancelTokenSource = axios.CancelToken.source(); // Create a new cancel token source for each useFetch instance

//         const fetchData = async () => {
//             dispatch({ type: ACTIONS.API_REQUEST });
//             try {
//                 const response = await axios.get(url, {
//                     cancelToken: cancelTokenSource.token
//                 });
//                 dispatch({ type: ACTIONS.FETCH_DATA, payload: response.data });
//             } catch (err) {
//                 if (!axios.isCancel(err)) {
//                     dispatch({ type: ACTIONS.ERROR, payload: err });
//                 }
//             }
//         };

//         fetchData();

//         return () => {
//             cancelTokenSource.cancel(); // Cancel the specific instance's request when the component unmounts
//         };
//     }, [url]);

//     const refetch = async () => {
//         let cancelTokenSource = axios.CancelToken.source(); // Create a new cancel token source for each useFetch instance

//         dispatch({ type: ACTIONS.API_REQUEST });
//         try {
//             const response = await axios.get(url, {
//                 cancelToken: cancelTokenSource.token
//             });
//             dispatch({ type: ACTIONS.FETCH_DATA, payload: response.data });
//         } catch (err) {
//             if (!axios.isCancel(err)) {
//                 dispatch({ type: ACTIONS.ERROR, payload: err });
//             }
//         }
//     };

//     return { state, refetch };
// };


export const useFetch = (url: string): { state: State; refetch: () => Promise<void> } => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const cancelTokenSourceRef = useRef(axios.CancelToken.source());

    useEffect(() => {
        const { token: cancelToken } = cancelTokenSourceRef.current;

        const fetchData = async () => {
            dispatch({ type: ACTIONS.API_REQUEST });
            try {
                const response = await axios.get(url, {
                    cancelToken
                });
                dispatch({ type: ACTIONS.FETCH_DATA, payload: response.data });
            } catch (err) {
                if (!axios.isCancel(err)) {
                    dispatch({ type: ACTIONS.ERROR, payload: err });
                }
            }
        };

        fetchData();

        return () => {
            cancelTokenSourceRef.current.cancel();
            cancelTokenSourceRef.current = axios.CancelToken.source();
        };
    }, [url]);

    const refetch = async () => {
        cancelTokenSourceRef.current.cancel();
        cancelTokenSourceRef.current = axios.CancelToken.source();

        const { token: cancelToken } = cancelTokenSourceRef.current;

        dispatch({ type: ACTIONS.API_REQUEST });
        try {
            const response = await axios.get(url, {
                cancelToken
            });
            dispatch({ type: ACTIONS.FETCH_DATA, payload: response.data });
        } catch (err) {
            if (!axios.isCancel(err)) {
                dispatch({ type: ACTIONS.ERROR, payload: err });
            }
        }
    };

    return { state, refetch };
};


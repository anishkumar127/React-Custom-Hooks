import React, { useReducer } from 'react';
import { INITIAL_STATE, PostAction, postReducer } from '../hooks/postReducerWithTypeScript';
import { ACTION_TYPES } from '../hook/types';

const UsingUseReducer = () => {
    const [state, dispatch] = useReducer(postReducer, INITIAL_STATE);

    const handleFetch = async () => {
        try {
            dispatch({
                type: ACTION_TYPES.FETCH_START,
                payload: undefined
            });
            const response = await fetch("https://jsonplaceholder.typicode.com/users");
            const data = await response.json();
            console.log(data);
            dispatch({ type: ACTION_TYPES.FETCH_SUCCESS, payload: data });
        } catch (error) {
            dispatch({ type: ACTION_TYPES.FETCH_ERROR, payload: error });
        }
    };

    return (
        <>
            <button onClick={handleFetch}>
                {state.loading ? "Wait..." : "Fetch the post"}
            </button>
            <p>{state.post[0]?.name}</p>
            {state.error && <span>Something went wrong!</span>}
        </>
    );
};

export default UsingUseReducer;

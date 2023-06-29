export const INITIAL_STATE = {
    loading: false,
    post: {},
    error: false
}

export const postReducer = (state, { type, payload }) => {
    switch (type) {
        case "FETCH_START":
            return {
                loading: true,
                error: false,
                post: {}
            }

        case "FETCH_SUCCESS":
            return {
                ...state,
                loading: false,
                post: payload
            }

        case "FETCH_ERROR":
            return {
                loading: false,
                error: true,
                post: {}
            }

        default:
            return state;
    }

}
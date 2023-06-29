export const INITIAL_STATE = {
    title: "",
    desc: "",
    price: 0,
    category: "",
    tags: [],
    quantity: 0
}

export const formReducer1 = (state, { type, payload }) => {

    switch (type) {
        case "CHANGE_INPUT":
            return {
                ...state,
                [payload.name]: payload.value
            }

        case "ADD_TAG":
            return {
                ...state,
                tags: [...state.tags, payload]
            }
        case "REMOVE_TAG":
            return {
                ...state,
                tags: state.tags.filter((tag) => tag !== payload)
            }
        case "INCREASE":
            return {
                ...state,
                quantity: state.quantity + 1

            }
        case "DECREASE":
            return {
                ...state,
                quantity: state.quantity - 1

            }
        default:
            return state;
    }
}
export interface PostState {
    loading: boolean;
    post: Post;
    error: boolean;
}

export interface Post {
    id: number;
    title: string;
    content: string;
    name: string;
}

export type PostAction =
    | { type: string; payload: any }
    | { type: string; payload: Post }
    | { type: string; payload: Post };

export const INITIAL_STATE: PostState = {
    loading: false,
    post: {} as Post,
    error: false,
};

export const postReducer = (
    state: PostState,
    { type, payload }: PostAction
): PostState => {
    switch (type) {
        case 'FETCH_START':
            return {
                ...state,
                loading: true,
                error: false,
                post: {} as Post,
            };

        case 'FETCH_SUCCESS':
            return {
                ...state,
                loading: false,
                post: payload,
            };

        case 'FETCH_ERROR':
            return {
                ...state,
                loading: false,
                error: true,
                post: {} as Post,
            };

        default:
            return state;
    }
};

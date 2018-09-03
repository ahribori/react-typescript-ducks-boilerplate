import update from 'immutability-helper';
import { handleActions } from 'redux-actions';
import {
    createRequestThunk,
    createRequestThunkTypes,
    createPendingState,
    createSuccessState,
    createFailureState,
    ThunkState,
} from '../helpers/requestThunkHelpers';
import { Post } from '../models/post';


export interface SampleState {
    data: Post[] | null;
    fetch: ThunkState | null;
}

// ACTION TYPES
const FETCH = createRequestThunkTypes('sample/FETCH');

// ACTIONS

/* 예약 생성 */
export const fetchSample = () => {
    return createRequestThunk(FETCH.DEFAULT, {
        url: 'https://jsonplaceholder.typicode.com/posts',
        method: 'GET',
    });
};

// INITIAL STATE
const initialState: SampleState = {
    data: null,
    fetch: null,
};

// REDUCERS
export default handleActions<SampleState, any>(
    {

        [FETCH.PENDING]: (state) => update(state, {
            fetch: { $set: createPendingState() },
        }),
        [FETCH.SUCCESS]: (state, action) => update(state, {
            createResponse: { $set: action.payload.data },
            create: { $set: createSuccessState() },
        }),
        [FETCH.FAILURE]: (state, action) => update(state, {
            create: { $set: createFailureState(action.payload) },
        }),

    },
    initialState,
);

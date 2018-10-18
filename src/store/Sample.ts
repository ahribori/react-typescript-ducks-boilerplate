import update from 'immutability-helper';
import { handleActions } from 'redux-actions';
import {
    createRequestThunk,
    createRequestThunkTypes,
    createInitialState,
    createPendingState,
    createSuccessState,
    createFailureState,
    ThunkState,
} from '../helpers/requestThunkHelpers';

export interface SampleState {
    fetchSample: ThunkState;
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
    fetchSample: createInitialState(),
};

// REDUCERS
export default handleActions<SampleState, any>(
    {

        [FETCH.PENDING]: (state) => update(state, {
            fetchSample: { $set: createPendingState() },
        }),
        [FETCH.SUCCESS]: (state, action) => update(state, {
            fetchSample: { $set: createSuccessState(action.payload.data) },
        }),
        [FETCH.FAILURE]: (state, action) => update(state, {
            fetchSample: { $set: createFailureState(action.payload) },
        }),

    },
    initialState,
);

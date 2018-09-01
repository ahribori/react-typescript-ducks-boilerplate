import update from 'immutability-helper';
import { handleActions } from 'redux-actions';
import {
    createRequestThunk,
    createRequestThunkTypes,
    createPendingState,
    createSuccessState,
    createFailureState,
} from '../helpers/requestThunkHelpers';

export interface SampleState {
    data: any;
    fetch: any;
}

// ACTION TYPES
const FETCH = createRequestThunkTypes('user/FETCH');

// ACTIONS

/* 예약 생성 */
export const fetchUserProfile = () => {
    return createRequestThunk(FETCH.DEFAULT, {
        url: '/v4/user/profile',
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

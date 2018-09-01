import { applyMiddleware, combineReducers, createStore, Action } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import sample, { SampleState } from './Sample';

export interface RootState {
    sample: SampleState;
}

const appReducer = combineReducers<RootState>({
    sample,
});

const rootReducer = (state: RootState, action: Action) => {
    if (action.type === 'auth/LOGOUT') {
        return appReducer(undefined, action);
    }
    return appReducer(state, action);
};

export function initializeStore(initialState: object) {
    return createStore(
        rootReducer,
        initialState,
        composeWithDevTools(applyMiddleware(thunkMiddleware)),
    );
}

// types

export type Action = {
    type: string;
    [key: string]: any;
}

export type ActionCallback = (state: Object, action: Action) => Object

// State

const initialState = {};

// Actions as Object to skip use of Switch
// Actions is Name/Key have of convention to be Uppercase separated by underscore because they are Constants

const actions: { [key: string]: ActionCallback } = {};

// actions['Example'] = (state: Object, action: Action) => {
//     return { ...state, payload: action.payload };
// }

function Store(state: Object = initialState, action: Action) {
    if (typeof actions[action.type] === 'function') return actions[action.type](state, action);
    return state;
}

export default Store;
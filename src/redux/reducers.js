import types from "./TYPES";

const InitialState = {
    nodes: []
}

const rootReducer = (state = InitialState, action) => {
    switch (action.type) {
        case types.ADD:
            // console.log(action.payload);
            state.nodes.push(action.payload);
            return state;
        case types.REMOVE:
            return state.nodes.filter(nd => {
                return nd.id !== action.payload.id
            })
        default:
            return state;
    }
}

export default rootReducer;
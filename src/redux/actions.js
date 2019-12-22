import types from "./TYPES"

const addAction = (order) => {
    return {
        type: types.ADD,
        payload: order
    }
}

export default addAction;
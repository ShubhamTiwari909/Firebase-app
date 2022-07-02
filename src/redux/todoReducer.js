const contactReducer = (state = [], action) => {
    switch (action.type) {
        case "FETCH":
            state = action.payload
            return state
        default:
            return state;
    }
}

export default contactReducer;
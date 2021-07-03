const initialState = {
    allDemo:[]
}

const demoReducer = (state=initialState, action) => {
    switch (action.type) {
        case "":
            const newArr = state.allDemo.concat(action.payload);
            return{
                ...state,
                allDemo:newArr
            }

        default:
            return state; 
    }
}

export default demoReducer;
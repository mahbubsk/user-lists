const initialState = {
    allComments:[]
}

const commentReducer = (state=initialState, action) => {
    switch (action.type) {
        case "CREATE2":
            const newArr = state.allComments.concat(action.payload);
            return{
                ...state,
                allComments:newArr
            }
    
        default:
            return state; 
    }
}

export default commentReducer;
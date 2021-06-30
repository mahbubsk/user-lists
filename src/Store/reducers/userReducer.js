const initialState = {
    allUser:[]
}

const userReducer = (state=initialState, action) => {
    switch (action.type) {
        case "CREATE":
            const newArr = state.allUser.concat(action.payload);
            return{
                ...state,
                allUser:newArr
            }
    
        default:
            return state; 
    }
}

export default userReducer;
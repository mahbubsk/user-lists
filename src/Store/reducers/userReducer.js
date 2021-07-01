const initialState = {
    allUser:[],
    length:0
}

const userReducer = (state=initialState, action) => {
    switch (action.type) {
        case "CREATE_USER":
            let newArr = state.allUser.concat(action.payload);
            return{
                ...state,
                allUser:newArr,
                length:newArr.length
            }
        
        case "DELETE_USER":
            const filterdArray =  state.allUser.filter(user=>{
                return user.id!==action.payload.id;
            });

            return {
                ...state,
                allUser:filterdArray,
                length:filterdArray.length
            }


    
        default:
            return state; 
    }
}

export default userReducer;
const initialState = {
    allUser:[],
    allFavourites:[],
    length:0,
    favouriteLength:0
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
            const filterdArray =  state.allUser.filter(user=>user.id!==action.payload.id);
            const newFavArray =  state.allFavourites.filter(fav=>fav.id!==action.payload.id);

            return {
                ...state,
                allUser:filterdArray,
                allFavourites:newFavArray,
                length:filterdArray.length,
                favouriteLength:newFavArray.length
            }

        case "UPDATE_USER":
            const updateArray = state.allUser.map(user => { 
                if(user.id === action.payload.id) { 
                    return action.payload; 
                } 
                else { 
                    return user;
                } 
            }) 

            return {
                ...state,
                allUser:updateArray,
                length:updateArray.length
            }
        case "ADD_TO_FAVOURITE":
            let allFavourites = state.allFavourites.concat(action.payload);

            return {
                ...state,
                allFavourites,
                favouriteLength:allFavourites.length
            }

            break;

        case "DELETE_FROM_FAVOURITE":
            console.log(action.payload);
            let deleteFavouriteArr = state.allFavourites.filter(favourite=>favourite.id!==action.payload.id);

            return {
                ...state,
                allFavourites:deleteFavouriteArr,
                favouriteLength:deleteFavouriteArr.length
            }
    
        default:
            return state; 
    }
}

export default userReducer;
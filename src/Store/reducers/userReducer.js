const initialState = {
    allUser:[],
    allFavourites:[],
    length:0,
    favouriteLength:0,
    modal:false
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
            const filterdArray =  state.allUser.filter(user=>user.id !== action.payload.id);
            const newFavArray =  state.allFavourites.filter(fav=>fav.id !== action.payload.id);

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

            const favArray = state.allFavourites.map(fav => {
                 
                if(fav.id === action.payload.id) { 
                    return action.payload; 
                } 
                else { 
                    return fav;
                } 
            }) 

            return {
                ...state,
                allUser:updateArray,
                allFavourites:favArray,
                length:updateArray.length,
                favouriteLength:favArray.length
            }
        case "ADD_TO_FAVOURITE":
            for (let i = 0; i < state.allFavourites.length; i++) {
                if(state.allFavourites[i].id === action.payload.id){
                    return state;
                }
            }

            let allFavourites = state.allFavourites.concat(action.payload);
            
            return {
                ...state,
                allFavourites,
                favouriteLength:allFavourites.length
            }

        case "DELETE_FROM_FAVOURITE":
            let deleteFavouriteArr = state.allFavourites.filter(favourite=>favourite.id!==action.payload.id);

            return {
                ...state,
                allFavourites:deleteFavouriteArr,
                favouriteLength:deleteFavouriteArr.length
            }
        case "MODAL":
            const newModalState = action.payload;
            return{
                ...state,
                modal:newModalState
            }

        case "MODAL_CANCEL":
            const cancelModal = action.payload;
            return{
                ...state,
                modal:cancelModal
            }

            
    
        default:
            return state; 
    }
}

export default userReducer;
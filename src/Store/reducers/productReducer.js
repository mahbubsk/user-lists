const initialState = {
    allProducts:[]
}

const productReducer = (state=initialState, action) => {
    switch (action.type) {
        case "CREATE3":
            const newArr = state.allProducts.concat(action.payload);
            return{
                ...state,
                allProducts:newArr
            }
    
        default:
            return state; 
    }
}

export default productReducer;
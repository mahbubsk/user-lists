const initialState = {
    modal:false
}

const modalReducer = (state=initialState, action) => {
    switch (action.type) {
        case "MODAL":
            const newModalState = action.payload;
            return{
                ...state,
                modal:newModalState
            }
            break;

        case "MODAL_CANCEL":
            const cancelModal = action.payload;
            return{
                ...state,
                modal:cancelModal
            }
            break;
        
        default:
            return state; 
    }
}

export default modalReducer;
import React from 'react'
import {useSelector, useDispatch} from 'react-redux';
import {AiFillDelete} from 'react-icons/ai';
import {FaRegUserCircle} from 'react-icons/fa';

function Favourites() {

    const dispatch = useDispatch();
    const state = useSelector(function(state) {
        return state.user;
    });
    console.log(state);

    const favouriteDeleteHandler = (favourite) => {
        favourite.isFav=false;
        const action = {
            type:"DELETE_FROM_FAVOURITE",
            payload:favourite
        }

        dispatch(action);
    }

    return (
        <div style={{width:'40%'}}> 
            { 
                state.allFavourites.length > 0 && 
                <div>
                    <h2>Favourites List</h2>
                    {
                        
                        state.allFavourites.map(favourite=>{
                            return(
                                <div 
                                    style={{
                                        display:"flex",alignItems: "center", 
                                        justifyContent:"space-between", 
                                        backgroundColor:'rgba(49, 151, 149,0.3)',
                                        marginTop:'20px',padding:'10px',
                                        width:'18rem',borderRadius:'5px',
                                        
                                    }}>
                                    <div style={{display:'flex'}}>
                                        <FaRegUserCircle width="30px" height="30px"
                                            style={{
                                                alignSelf: 'center'
                                            }} /> 
                                        <p style={{margin:"10px",fontWeight:'600',fontSize:'16px'}}>
                                            {favourite && favourite.name}
                                        </p>
                                    </div>

                                    <div style={{
                                        display:'flex', alignItems:'center',
                                        justifyContent:'space-between',
                                        marginRight:'5px' 
                                    }}>
                                        
                                        <AiFillDelete 
                                            style={{cursor:"pointer"}}
                                            onClick={()=>favouriteDeleteHandler(favourite)}
                                        />
                                    </div>
                                </div>
                            )
                        })
                    } 
                </div>
            }
        </div>
    )
}

export default Favourites

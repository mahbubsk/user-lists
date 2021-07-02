import React   from 'react'
import {useSelector, useDispatch } from 'react-redux';
import {MdModeEdit} from 'react-icons/md';
import {AiFillDelete} from 'react-icons/ai';
import {GrFavorite} from 'react-icons/gr';
import {FaRegUserCircle} from 'react-icons/fa'; 
import { Scrollbars } from 'react-custom-scrollbars-2';



function UserItem({state,deleteHandler,setEditObj}) { 

    const dispatch = useDispatch();
    
    const stateModal = useSelector(function(state) {
        return state.user.modal;
    });
    console.log(stateModal)

    const favouritHandler = (user) =>{
        const action = {
            type:"ADD_TO_FAVOURITE",
            payload:user
        }
        
        dispatch(action);
    }



    return (
        <Scrollbars 
            autoHide

            autoHideTimeout={500} 
            autoHideDuration={100} 
    
            className="user-list-wrap">
            {
                state.allUser.map(user=>{
                    return(
                        <div>
                            <div 
                                style={{
                                    display:"flex",alignItems: "center", 
                                    justifyContent:"space-between", 
                                    // backgroundColor:'rgba(49, 151, 149,0.3)',
                                    borderBottom:'1px solid rgba(49, 151, 149,0.2)',
                                    margin:'0px auto',padding:'10px',
                                    width:'96.7%',
                                    // borderRadius:'5px',
                                    // inset: "20px !important",
                                    // cursor:"pointer" 
                                }}
                                className="list-item"
                            > 
                            <div style={{display:'flex'}}>
                                <FaRegUserCircle width="30px" height="30px" 
                                    style={{
                                        alignSelf: 'center', 
                                        color: '#4A5568'
                                    }} /> 
                                <p style={{margin:"10px",fontWeight:'400',fontSize:'16px', color: '#4A5568'}}>
                                    {user && user.name}
                                </p>
                            </div>

                            <div 
                                style={{
                                    display:'flex', alignItems:'center',
                                    justifyContent:'space-between', 
                                    marginRight: '5px', 
                                    transition:"all 0.5s",
                                    fontSize:'0px' 
                                }} 
                                className="icons-warpper" 
                            > 
                                <MdModeEdit 
                                    style={{cursor:"pointer", color: '#4A5568',marginRight:'10px'}}
                                    onClick={()=>{
                                        setEditObj(user)
                                        dispatch({
                                            type:"MODAL",
                                            payload:true
                                        })
                                    }}    
                                />
                                <AiFillDelete 
                                    style={{cursor:"pointer", color: '#4A5568',marginRight:'10px'}}
                                    onClick={()=>{
                                        deleteHandler(user)
                                    }}
                                />
                                <GrFavorite 
                                    style={{cursor:"pointer", color: '#4A5568'}}
                                    onClick={()=>favouritHandler(user)}
                                />
                            </div>
                        </div>
                        </div>
                    )
                })
            }
        </Scrollbars>
    )
}

export default UserItem

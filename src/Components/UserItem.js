import React   from 'react'
import { useDispatch } from 'react-redux';
import {MdModeEdit} from 'react-icons/md';
import {AiFillDelete} from 'react-icons/ai';
import {GrFavorite} from 'react-icons/gr';
import {FaRegUserCircle} from 'react-icons/fa'; 



function UserItem({state,deleteHandler,setEditObj}) { 
    const dispatch = useDispatch();
    const favouritHandler = (user) =>{
        const action = {
            type:"ADD_TO_FAVOURITE",
            payload:user
        }
        
        dispatch(action);
    }

    return (
        <div>
            {
                state.allUser.map(user=>{
                    return(
                        <div 
                            style={{
                                display:"flex",alignItems: "center", 
                                justifyContent:"space-between", 
                                backgroundColor:'rgb(211 211 211)',
                                marginTop:'20px',padding:'10px',
                                width:'18rem',borderRadius:'5px'
                            }}>
                            <div style={{display:'flex'}}>
                                <FaRegUserCircle width="30px" height="30px"
                                    style={{
                                        alignSelf: 'center'
                                    }} /> 
                                <p style={{margin:"10px",fontWeight:'600',fontSize:'16px'}}>
                                    {user && user.name}
                                </p>
                            </div>

                            <div style={{
                                display:'flex', alignItems:'center',
                                justifyContent:'space-between', width:'22%', 
                                marginRight: '5px'
                            }}>
                                <MdModeEdit 
                                    style={{cursor:"pointer"}}
                                    onClick={()=>setEditObj(user)}    
                                />
                                <AiFillDelete 
                                    style={{cursor:"pointer"}}
                                    onClick={()=>deleteHandler(user)}
                                />
                                <GrFavorite 
                                    style={{cursor:"pointer"}}
                                    onClick={()=>favouritHandler(user)}
                                />
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default UserItem

import React   from 'react'
import {MdModeEdit} from 'react-icons/md';
import {AiFillDelete} from 'react-icons/ai';
import {GrFavorite} from 'react-icons/gr';

function UserItem({state,handleDelete}) {




    return (
        <div>
            {
                state.allUser.map(user=>{
                    return(
                        <div style={{display:"flex",alignItems: "center", justifyContent:"space-between", backgroundColor:'rgba(80,87,35,0.3)',marginTop:'20px',padding:'10px',width:'18rem',borderRadius:'20px'}}>
                            <div style={{display:'flex'}}>
                                <img    
                                        style={{borderRadius:"50%"}} 
                                        src="https://images.pexels.com/photos/1007066/pexels-photo-1007066.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                                        alt="user image"
                                        width="50" height="50"

                                 />
                                <h4 style={{margin:"10px"}}>{user.name}</h4>
                            </div>

                            <div style={{display:'flex', alignItems:'center',justifyContent:'space-between', width:'22%'}}>
                                <MdModeEdit style={{cursor:"pointer"}}/>
                                <AiFillDelete 
                                    style={{cursor:"pointer"}}
                                    onClick={()=>handleDelete(user)}
                                />
                                <GrFavorite style={{cursor:"pointer"}}/>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default UserItem

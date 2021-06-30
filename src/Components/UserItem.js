import React   from 'react'

function UserItem({state}) {
    return (
        <div>
            {
                state.allUser.map(user=>{
                    return(
                        <div style={{display:"flex",alignItems: "center"}}>
                            <p style={{backgroundColor:'teal', color:'white', padding:'5px',borderRadius:'5px'}}>{user.id}</p>
                            <h3 style={{marginLeft:"10px"}}>{user.name}</h3>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default UserItem

import React   from 'react'

function UserItem({state}) {
    return (
        <div>
            {
                state.allUser.map(user=>{
                    return(
                        <div style={{display:"flex",alignItems: "center", justifyContent: "space-between"}}>
                            <img style={{borderRadius:"50px"}} src="https://images.pexels.com/photos/1007066/pexels-photo-1007066.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" width="50" height="50"/>
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

import React, {useState}          from 'react'
import {useSelector, useDispatch} from 'react-redux';
import UserItem                   from './UserItem';
import { nanoid }                 from 'nanoid'

function User() {

    const [name,setName] = useState('');
    const [editObj, setEditObj] = useState('');
    const dispatch = useDispatch();

    const state = useSelector(function(state) {
        return state.user;
    });
    
    const handleChange = (e) => {
      setName(e.target.value);
    }


    const clickHandler = () => {
      
      const user = {
        id:nanoid(),
        name:name
      }
  
      dispatch({
        type:"CREATE_USER",
        payload: user
      })
      setName("");
    }
    
    const deleteHandler = (e) => {
      const user = {
        id:e,
        name:name
      }
  
      dispatch({
        type:"DELETE_USER",
        payload: user.id
      })
    }


    const updateHandler = () => {
      dispatch({
        type:"UPDATE_USER",
        payload: editObj
      })
    }

    return (
        <div>
            <div>
              <h2>User List</h2>
                <input
                    autoFocus
                    type="text"
                    value={name}
                    onChange={handleChange}
                    placeholder="User Name"
                    style={{
                      padding:'8px 15px',outline: 'none',
                      marginRight:'10px', borderRadius:'5px', 
                      border:'1px solid #ddd',
                      width:'14rem'
                    }}
                />
                <button onClick={name?clickHandler:()=>{null}}>Add User</button>

                
                {
                  state.length 
                    ? <UserItem state={state} deleteHandler={deleteHandler} setEditObj={setEditObj}/> 
                    : <h3 style={{color:'#ddd'}}>user list is empty</h3>
                }

                <div style={{margin: '50px'}} />
                <input 
                  type="text"
                  value={editObj.name}
                  placeholder="update filed"
                  onChange={(e)=>setEditObj({
                    name:e.target.value,
                    id:editObj.id
                  })}
                />
                <button onClick={updateHandler}>Update</button>
            </div>

            
        </div>
    )
}

export default User;

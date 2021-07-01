import React, {useState}          from 'react'
import {useSelector, useDispatch} from 'react-redux';
import UserItem                   from './UserItem';
import { nanoid } from 'nanoid'

function User() {

    const [name,setName] = useState('');
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
    
    const handleDelete = (e) => {
      const user = {
        id:e,
        name:name
      }
  
      dispatch({
        type:"DELETE_USER",
        payload: user.id
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
                    style={{padding:'15px',outline: 'none',marginRight:'10px', borderRadius:'10px', border:'1px solid #ddd'}}
                />
                <button onClick={name?clickHandler:()=>{null}}>Add User</button>

                
                <UserItem state={state} handleDelete={handleDelete}/>
            </div>

            
        </div>
    )
}

export default User;

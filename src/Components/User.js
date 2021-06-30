import React, {useState}          from 'react'
import {useSelector, useDispatch} from 'react-redux';
import UserItem                   from './UserItem';
import Comment                    from './Comment';
import Product                    from './Product';
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
        id:Math.floor(Math.random() * 10000),
        name:name
      }
  
      dispatch({
        type:"CREATE",
        payload: user
      })
      setName("");
    }
    

    return (
        <div>
            <div>
              <h2>User List</h2>
                <input
                    type="text"
                    value={name}
                    onChange={handleChange}
                    placeholder="User Name"
                    style={{padding:'15px',outline: 'none',marginRight:'10px', borderRadius:'10px', border:'1px solid #ddd'}}
                />
                <button onClick={clickHandler}>Add User</button>

                
                <UserItem state={state}/>
            </div>

            
        </div>
    )
}

export default User;

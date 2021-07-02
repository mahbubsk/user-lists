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
    const stateModal = useSelector(function(state) {
      return state.user.modal;
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
      
      dispatch({
        type:'MODAL',
        payload:false
      })
    }

    const cancelHandler = () =>{
        dispatch({
            type:'MODAL_CANCEL',
            payload:false
        })
    }



    return (
        <div style={{width:"40%"}}>
            <div>
                <h2>User List</h2>
                <input
                    autoFocus 
                    type="text"
                    value={name}
                    onChange={handleChange}
                    placeholder="User Name"
                    style={{
                        padding:'6px 15px',outline: 'none',
                        marginRight:'10px', borderRadius:'5px', 
                        border:'1px solid #ddd',
                        width:'58%',
                        fontSize:'16px'
                    }}
                />
                <button className="save-btn btn" onClick={name?clickHandler:()=>{null}}>Add User</button>

                
                {
                  state.length 
                    ? <UserItem state={state} deleteHandler={deleteHandler} setEditObj={setEditObj}/> 
                    : <h3 style={{color:'gray'}}>user list is empty</h3>
                }
            <div className={stateModal ? 'modal-background':''}>
              <div className={stateModal ? 'modal' : 'display-n'}>
                 <div>
                    <div>
                        <input 
                            type="text"
                            value={editObj.name}
                            placeholder="update filed"
                            onChange={(e)=>setEditObj({
                              name:e.target.value,
                              id:editObj.id
                            })}
                            style={{padding:'10px',border:'1px solid #ddd',borderRadius:'5px',width:'10rem',outline:'none',fontSize:'1rem'}}
                          />
                    </div>
                    <button className="cancel-btn btn" onClick={cancelHandler}>cancel</button>
                    <button className="save-btn btn" onClick={updateHandler}>save</button>
                 </div>
              </div>
            </div>

            </div>

            
        </div>
    )
}

export default User;

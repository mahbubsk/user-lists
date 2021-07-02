import React, {useState}          from 'react'
import {useSelector, useDispatch} from 'react-redux';
import UserItem                   from './UserItem';
import { nanoid }                 from 'nanoid'

function User() {

    const [name,setName] = useState('');
    const [nameErr,setNameErr] = useState(false);

    const [editObj, setEditObj] = useState('');
    const [updateNameErr, setUpdateNameErr] = useState(false);
  
    const dispatch = useDispatch();

    const state = useSelector(function(state) {
        return state.user;
    });
    const stateModal = useSelector(function(state) {
      return state.user.modal;
  });



    const clickHandler = () => {
      const submitedName = name.trim();
      const length = submitedName.length;
      if(length>0){
        const user = {
          id:nanoid(),
          name:name,
          isFav:false
        }
    
        dispatch({
          type:"CREATE_USER",
          payload: user
        })
        setName("");
      } 
      else {
        setNameErr(true)
      }
    }
    
    const deleteHandler = (user) => {
      dispatch({
        type:"DELETE_USER",
        payload:user
      })
    }


    const updateHandler = () => {
      const submitedName = editObj.name.trim();
      const length = submitedName.length;
      if(length>0){
        dispatch({
          type:"UPDATE_USER",
          payload: editObj
        })

        dispatch({
          type:'MODAL',
          payload:false
        })

        setEditObj({
          name:'',
          id:'',
          isFav:false
        });
      } 
      else {
        setUpdateNameErr(true)
      }  

    }

    const cancelHandler = () =>{
        dispatch({
            type:'MODAL_CANCEL',
            payload:false
        })
        setUpdateNameErr(false)
    }



    return (
        <div style={{width:"30%"}}>
            <div>
                <h2>User List</h2>
                <input
                    autoFocus 
                    type="text"
                    value={name}
                    onChange={(e) => { 
                      setNameErr(false)
                      setName(e.target.value);
                    }}
                    placeholder="User Name"
                    style={{
                        padding:'6px 15px',outline: 'none',
                        marginRight:'10px', borderRadius:'5px', 
                        border:nameErr ? '1px solid #c53030' : '1px solid #ddd',
                        width:'70%',
                        fontSize:'16px'
                    }}
                /> 
                {
                  nameErr && 
                  <p style={
                      {fontSize:'13px',color:'#c53030',marginTop:'5px'}
                    }
                  >
                    Name is required
                  </p>
                }
                <button className="save-btn btn" onClick={clickHandler}>Add User</button>
                
                
                {
                  state.length 
                    ? <UserItem state={state} deleteHandler={deleteHandler} setEditObj={setEditObj}/> 
                    : <h3 style={{color:'gray'}}>user list is empty</h3>
                }
            <div className={stateModal ? 'modal-background':''}>
              <div className={stateModal ? 'modal' : 'display-n'}>
                 <div>
                    <div>
                        <label>Update Name: </label>
                        <input 
                            type="text"
                            value={editObj.name}
                            placeholder="update filed"
                            onChange={(e)=> {
                                setEditObj({
                                    name:e.target.value,
                                    id:editObj.id,
                                    isFav:editObj.isFav
                                })
                                setUpdateNameErr(false)
                            }}
                            style={
                                {
                                    padding:'10px',borderRadius:'5px',width:'10rem',outline:'none',fontSize:'1rem',
                                    border:updateNameErr ? "1px solid #c53030" : "1px solid #ddd"
                                }
                            }
                        />
                        {
                            updateNameErr && 
                            <p style={{
                                    fontSize:'13px',color:'#c53030'
                                }}>
                                name required 
                            </p>
                        }

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

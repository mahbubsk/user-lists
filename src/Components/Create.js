import React from 'react'
import ErrMsg from './Style/Common/ErrMsg';
import CreateInputBox from './Style/Create/CreateInputBox';
import CreateUserBtn from './Style/Create/CreateUserBtn';
function Create({name,clickHandler,setName,nameErrMsg,setNameErr,nameErr}) {

    //create section styles here

    const createInputStyle = {
        padding:'6px 15px',
        outline: 'none', 
        border:nameErr ? '1px solid #c53030' : '1px solid #ddd',
        width:'80%',
        height:'calc(40px - 12px)',
        fontSize:'16px',
        borderRadius:'8px 0 0 8px'
    }


    return (
        <div>
            <CreateInputBox>
                <input
                    autoFocus 
                    type="text"
                    value={name}
                    onChange={(e) => { 
                        setNameErr(false); 
                        setName(e.target.value);
                    }}
                    placeholder="User Name"
                    style={createInputStyle} 
                /> 
                <CreateUserBtn onClick={clickHandler}>
                    Save
                </CreateUserBtn>
            </CreateInputBox>

            {
                nameErr && 
                <ErrMsg>
                    { nameErrMsg }
                </ErrMsg>
            }
                
        </div>
    )
}

export default Create;

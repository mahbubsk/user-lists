import React from 'react'
import ModalBackground from './Style/Update/ModalBackground';
import Modal from './Style/Update/Modal';
import Button from './Style/Update/Button';
import ErrMsg from './Style/Common/ErrMsg';
import Label from './Style/Update/Label';
function Update({stateModal,editObj, setEditObj,updateNameErr,setUpdateNameErr,updateErrMsg,cancelHandler,updateHandler,setUpdateErrMsg}) {

    const updateInputStyle = {
        padding: '10px', 
        borderRadius: '5px',
        width: '80%', 
        outline: 'none', 
        fontSize: '1rem',
        border: updateNameErr ? "1px solid #c53030" : "1px solid #ddd",
        marginTop:'2rem'
    }

    


    

    return (
        <ModalBackground stateModal={stateModal}>
            <Modal stateModal={stateModal}>
                <div>
                    <div>
                        <Label>Update Name</Label>
                        <input
                            type="text"
                            value={editObj.name}
                            placeholder="update filed"
                            onChange={(e) => {
                                setEditObj({
                                    name: e.target.value,
                                    id: editObj.id,
                                    isFav: editObj.isFav
                                })
                                setUpdateNameErr(false);
                                setUpdateErrMsg("");
                            }}
                            style={updateInputStyle}
                        />
                        {
                            updateErrMsg &&
                            <ErrMsg>
                                {updateErrMsg}
                            </ErrMsg>
                        }

                    </div>
                    <Button onClick={cancelHandler}>cancel</Button>
                    <Button saveButton onClick={updateHandler}>save</Button>
                </div>

            </Modal>
        </ModalBackground>
    )
}

export default Update

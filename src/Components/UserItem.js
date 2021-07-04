import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import ItemUser from './Style/UserItem/ItemUser';
import IconWrapper from './Style/UserItem/IconWrapper';
import UserName from './Style/UserItem/UserName';
import UsernameIconWrap from './Style/UserItem/UsernameIconWrap';
import {MdModeEdit} from 'react-icons/md';
import {AiFillDelete} from 'react-icons/ai';
import {FaRegUserCircle} from 'react-icons/fa'; 
import { Scrollbars } from 'react-custom-scrollbars-2';
import {MdFavoriteBorder} from 'react-icons/md';


function UserItem({deleteHandler,setEditObj}) { 
    const dispatch = useDispatch();
    
    const state = useSelector(function(state) {
        return state.user;
    });
    console.log(state)

    const favouritHandler = (user) =>{
        user.isFav=true;
        const action = {
            type:"ADD_TO_FAVOURITE",
            payload:user
        }
        dispatch(action);
    }

    const favouriteDeleteHandler = (user) => {
        user.isFav=false;
        const action = {
            type:"DELETE_FROM_FAVOURITE",
            payload:user
        }

        dispatch(action);   
    }

 
    
    const userIconStyle = {
        alignSelf: 'center', 
        color: '#4A5568',
        width:'20px',
        height:'20px'
    }

    const iconsStyle = {
        cursor:"pointer",
        color: '#4A5568',
        marginRight:'10px'
    }

    return (
        <Scrollbars 
            autoHide
            autoHideTimeout={500} 
            autoHideDuration={100} 
            className="user-list-wrap"
        >
            {
                state.allUser.slice(0).reverse().map(user => { 
                    return( 
                        <div key={user.id}> 
                            <ItemUser 
                            > 
                                <UsernameIconWrap>
                                    <FaRegUserCircle
                                        style={userIconStyle} 
                                    /> 
                                    <UserName>
                                        {user && user.name}
                                    </UserName>
                                </UsernameIconWrap>

                                <IconWrapper 
                                > 
                                    <MdModeEdit 
                                        style={iconsStyle}
                                        onClick={()=>{
                                            setEditObj(user)
                                            dispatch({
                                                type:"MODAL",
                                                payload:true
                                            })
                                        }}    
                                    />
                                    <AiFillDelete 
                                        style={iconsStyle}
                                        onClick={()=>{
                                            deleteHandler(user)
                                        }}
                                    />
                                    <MdFavoriteBorder 
                                        style={{color: user.isFav ? "red" : '#4A5568',cursor:'pointer'}}
                                        onClick={user.isFav ? () => favouriteDeleteHandler(user) : () => favouritHandler(user)}
                                    />
                                </IconWrapper>
                            </ItemUser>
                        </div>
                    )
                })
            }
        </Scrollbars>
    )
}

export default UserItem

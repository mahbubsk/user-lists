import React from 'react'
import {useSelector, useDispatch} from 'react-redux';
import styled from 'styled-components';
import ListWrapper from './Style/User/ListWrapper';
import ItemUser from './Style/UserItem/ItemUser';
import UserName from './Style/UserItem/UserName';
import UsernameIconWrap from './Style/UserItem/UsernameIconWrap';

import {AiFillDelete} from 'react-icons/ai';
import {FaRegUserCircle} from 'react-icons/fa';
import { Scrollbars } from 'react-custom-scrollbars-2';

function Favourites() {

    const dispatch = useDispatch();
    const state = useSelector(function(state) {
        return state.user;
    }); 



    const favouriteDeleteHandler = (favourite) => {
        favourite.isFav=false;
        const action = {
            type:"DELETE_FROM_FAVOURITE",
            payload:favourite
        }

        dispatch(action);
    }

    //styles
    


    const FavTitle = styled.h2`
        margin: 57px 0 0 0;

        @media (max-width:989px){
            font-size:30px;
        }
    `


    const userIconStyle = {
        alignSelf: 'center', 
        color: '#4A5568',
        height:'30px',
        width:'30px'
    }


    const favDelIconStyle = {
        cursor:"pointer",
        color: '#4A5568'
    }



    return (
        <ListWrapper style={{zIndex:state.modal ? "-1" : '0'}}> 
            { 
                state.allFavourites.length > 0 && 
                <div>
                    <FavTitle>Favourites List</FavTitle>
                    <Scrollbars
                        className="user-list-wrap"
                    >
                    {
                        
                        state.allFavourites.slice(0).reverse().map(favourite=>{
                            return(
                                    <ItemUser 
                                        key={favourite.id}
                                    > 

                                        <UsernameIconWrap>
                                            <FaRegUserCircle style={userIconStyle}/> 

                                            <UserName>
                                                {favourite && favourite.name}
                                            </UserName>
        
                                        </UsernameIconWrap>

                                        <AiFillDelete 
                                                style={favDelIconStyle}
                                                onClick={()=>favouriteDeleteHandler(favourite)}
                                        />

                                    </ItemUser>
                                )
                            })
                        }    
                    </Scrollbars> 
                </div>
            }
        </ListWrapper>
    )
}

export default Favourites

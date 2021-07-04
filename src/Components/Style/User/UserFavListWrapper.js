import styled from 'styled-components';

const UserFavListWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;

    @media (max-width:768px){
        flex-direction:column;
    }
`
export default UserFavListWrapper;
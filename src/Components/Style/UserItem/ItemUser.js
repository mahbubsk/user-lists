import styled from 'styled-components';

const ItemUser = styled.div`
    display: flex;
    align-items:  center;
    justify-content: space-between;
    border-bottom: 1px solid rgba(240, 242, 245, 0.8);
    margin: 0px auto;
    padding: 10px;
    transition:all 0.3s;

    &:hover{
        background-color: rgba(49, 151, 149,0.05);
    }
`

export default ItemUser;
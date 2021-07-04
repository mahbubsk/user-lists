import styled from "styled-components"
import ItemUser from "./ItemUser"

const IconWrapper = styled.div`
    display: flex;
    align-items:  center;
    justify-content: space-between; 
    margin-right: 5px; 
    transition: all 0.5s;
    font-size: 0px;

    ${ItemUser}:hover &{
        font-size:20px !important;
    }
    
    @media (max-width:768px){
        font-size:20px !important;
    }
`

export default IconWrapper;
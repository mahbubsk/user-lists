import styled from 'styled-components';

const Modal = styled.div`
    background-color: ${props=>props.stateModal && '#fff'};
    // display: ${props=>props.stateModal && "flex"};
    // justify-content: ${props=>props.stateModal && "center"};
    // align-items: ${props=>props.stateModal && "center"};
    width: ${props=>props.stateModal && "25rem"};
    height: ${props=>props.stateModal && "13rem"};
    border-radius: ${props=>props.stateModal && "20px"};
    z-index: ${props=>props.stateModal && "9999"};
    display: ${props=>props.stateModal ? "" : "none"};
    text-align: center;

    @media (max-width:615px) {
        width: ${props=>props.stateModal && "17rem"};
    }
    @media (max-width:405px) {
        width: ${props=>props.stateModal && "12rem"};
    }
`

export default Modal;
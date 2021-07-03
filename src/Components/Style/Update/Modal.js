import styled from 'styled-components';

const Modal = styled.div`
    background-color: ${props=>props.stateModal && '#fff'};
    display: ${props=>props.stateModal && "flex"};
    justify-content: ${props=>props.stateModal && "center"};
    align-items: ${props=>props.stateModal && "center"};
    width: ${props=>props.stateModal && "25rem"};
    height: ${props=>props.stateModal && "8rem"};
    border-radius: ${props=>props.stateModal && "20px"};
    z-index: ${props=>props.stateModal && "9999"};
    display: ${props=>props.stateModal ? "" : "none"};
`

export default Modal;
import styled from 'styled-components';

const ModalBackground = styled.div`
    background: ${props=>props.stateModal && "rgba(78, 70, 70, 0.233)"};
    backdrop-filter: ${props=>props.stateModal && "blur(2px)"};
    width: ${props=>props.stateModal && "100vw"};
    height: ${props=>props.stateModal && "100vh"};
    position: ${props=>props.stateModal && "absolute"};
    top: ${props=>props.stateModal && "0"};
    left: ${props=>props.stateModal && "0"};
    display: ${props=>props.stateModal && "flex"};
    justify-content: ${props=>props.stateModal && "center"};
    align-items: ${props=>props.stateModal && "center"};
    // padding:2rem;
`

export default ModalBackground;
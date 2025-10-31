import styled from "styled-components";

export const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background-color: rgba(0,0,0,0.5);
  justify-content: center;
  display: flex;
  align-items: center;
`

export const ModalContainer = styled.div`
  min-width: 400px;
  margin: 0 auto;
  padding: 40px 20px;
  background: white;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  color: ${(props) => props.theme.colors.primary};
  background-color: ${(props) => props.theme.colors.secondary};
`

export const ModalHeader = styled.div`
  display: flex;
  justify-content: center;

`

export const ModalBody = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 1rem;
  align-items: center;
  gap: 20px;
`

export const ModalFooter = styled.div`
  display: flex;
  justify-content: center;
  
`
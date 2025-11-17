import styled from 'styled-components';

export const ButtonWrapper = styled.button`
  padding: 20px 30px;
  background-color: ${(props) => props.color ? props.color : props.theme.colors.secondary};
  color: ${(props) => props.theme.colors.primary};
  cursor: pointer;
  min-width: 300px;
  font-size: 1.4rem;
  margin: 20px;
  border: none;
  border-radius: 10px;
  font-weight: 400;

  &:hover {
    box-shadow: 0 0 10px ${(props) => props.theme.colors.purple};
    cursor: pointer;
  }

  ${(props) => props.theme.media.mobile} {
    min-width: 100px
  }
`;
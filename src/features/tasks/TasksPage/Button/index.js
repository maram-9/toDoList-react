import styled from "styled-components";

export const Button = styled.button`
  margin: 0 0 0 20px;
  color: ${({ theme }) => theme.color.teal};
  border: none;
  background-color: transparent;
  margin-right: 0 0 0 20px;
  transition: filter 0.3s;

  &:disabled {
    color: ${({ theme }) => theme.color.silver};
  }

  &:hover {
    filter: brightness(110%);
  }

  &:active {
    filter: brightness(120%);
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    flex-basis: 100%;
    margin: 10px;
  }
`;
export default Button;

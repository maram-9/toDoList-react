import styled from 'styled-components';

export const StyledForm = styled.form`
    display: grid;
    grid-template-columns: 1fr auto;
    grid-gap: 20px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        grid-template-columns: 1fr;
    }
`;

export const Button = styled.button`
    padding: 10px;
    background: ${({ theme }) => theme.color.teal};
    color: ${({ theme }) => theme.color.white};
    border: none;
    transition: 0.3s;

    &:hover {
        filter: brightness(100%);
        transition: scale(1.1);
    }
    
    &:active {
        filter: brightness(120%);
    }
    `;

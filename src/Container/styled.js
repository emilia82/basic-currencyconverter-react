import styled from "styled-components";

export const Wrapper = styled.div`
    flex-basis: 900px;
    margin: 15px;
    padding: 0 20px;
    background: ${({ theme }) => theme.color.white};
    box-shadow: 0 0 10px ${({ theme }) => theme.color.blue};
    border-radius: 10px;
`;


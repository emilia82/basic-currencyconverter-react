import styled from "styled-components";


export const Label = styled.label`
    width: 100%;
    max-width: 150px;
    display: inline-block;
    margin-right: 5px;
    font-size: 25px;
`;


export const Result = styled.p`
    text-align: center;
    font-size: 25px;
`;

export const Info = styled.p`
    font-size: 15px;
    text-align: center;
    color: ${({ theme }) => theme.color.red};
`;

export const LabelText = styled.span`
    font-size: 20px;
`;

export const Field = styled.input`
    border: 3px solid ${({ theme }) => theme.color.red};
    padding: 20px;
    border-radius: 5px;
    margin: 20px 0;
`;

export const Button = styled.button`
 width: 100%;
    border: none;
    background-color: ${({ theme }) => theme.color.cello};
    color: ${({ theme }) => theme.color.white};
    padding: 10px;
    border-radius: 5px;
    text-align: center;
    text-decoration: none;
    transition: 0.3s;



    &:hover {
    filter: brightness(110%);
    }


    &:active {
    filter: brightness(130%);
    }

`;

export const Header = styled.p`
    margin: 10 auto;
    text-align: left;
`;

export const Info = styled.p`
    text-align: center;
    padding: 10px;
    font-size: 15px;
    color: ${({ theme }) => theme.color.emperor};
`;

export const Legend = styled.p`
    background-color: ${({ theme }) => theme.color.cello};
    color: ${({ theme }) => theme.color.white};
    border-radius: 5px;
    padding: 10px;
    font-size: 15px;
    `;

export const Loading = styled.p`
    color: ${({ theme }) => theme.color.cello};
`;

export const Failure = styled.p`
    color: ${({ theme }) => theme.color.crimson};
`;
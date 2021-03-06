import styled from "styled-components";

export const Label = styled.label`
    width: 100%;
    max-width: 150px;
    display: inline-block;
    margin-right: 5px;
    font-size: 25px;
`;

export const Info = styled.p`
    font-size: 15px;
    text-align: center;
    padding: 15px;
    color: ${({ theme }) => theme.color.cello};
`;

export const LabelText = styled.span`
    font-size: 15px;
    padding: 15px;
`;

export const Fieldset = styled.fieldset`
    border: 3px solid ${({ theme }) => theme.color.red};
    padding: 15px;
    border-radius: 10px;
    margin: 5px auto;
`;

export const Button = styled.button`
    width: 100%;
    border: none;
    margin-top: 10px;
    background-color: ${({ theme }) => theme.color.cello};
    color: ${({ theme }) => theme.color.white};
    padding: 15px;
    border-radius: 10px;
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

export const Header = styled.h1`
    margin: 10 auto;
    text-align: left;
    font-size: 25px;
    color: black;
    padding: 10px;
`;

export const Legend = styled.p`
    background-color: ${({ theme }) => theme.color.cello};
    color: ${({ theme }) => theme.color.white};
    border-radius: 5px;
    padding: 10px;
    font-size: 15px;
`;

export const Input = styled.input`
    font-size: 15px;
    padding: 10px;
    border-radius: 5px;
`;

export const Loading = styled.p`
    color: ${({ theme }) => theme.color.cello};
    padding: 20px;
`;

export const Failure = styled.p`
    color: ${({ theme }) => theme.color.red};
    padding: 20px;
`;

export const Copyright = styled.p`
    color: ${({ theme }) => theme.color.cello};
    padding: 5px;
    font-size: 20px;
    text-align: center;
`;
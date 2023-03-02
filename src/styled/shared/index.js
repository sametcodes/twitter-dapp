import styled from 'styled-components';

export const Button = styled.button`
    padding: 10px 20px;
    background-color: #00acee;
    color: #fff;
    border: 1px solid #fff;
    border-radius: 25px;
    cursor: pointer;

    &:hover{
        background-color: #00a9ae;
    }
`

export const ButtonInverse = styled.button`
    padding: 10px 20px;
    color: #00acee;
    background-color: #fff;
    border: 1px solid #00acee;
    border-radius: 25px;
    cursor: pointer;

    &:hover{
        background-color: #eee;
    }
`
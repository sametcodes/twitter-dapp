import styled from 'styled-components';

export const TextArea = styled.textarea`
    width: calc(100% - 20px);
    border: 1px solid #ccc;
    height: 100px;
    border-radius: 10px;
    padding: 10px;
    margin-top: 20px;
    resize: none;
    font-size: 20px;
    outline: 0;
`

export const TweetBoxContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
`
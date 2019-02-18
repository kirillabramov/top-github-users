import React from 'react';
import styled from 'styled-components';

const ErrorIndicatior = () => {
    return(
        <Error>
            <Message>Something went wrong...</Message>
            <Message>We will fix it as soon as possible 4 you :)</Message>
        </Error>
    )
}

export default ErrorIndicatior;

const Error = styled.div`
    width:100%;
    text-align: center;
    margin-top: 100px;
`;

const Message = styled.p`
    font-size: 18px;
    color: #000;
`;

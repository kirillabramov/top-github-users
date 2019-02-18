import React from 'react';
import styled, {keyframes} from 'styled-components';




const Loader = () =>{
    return(
        <Spinner>
            <Bounce></Bounce>
            <SecondBounce></SecondBounce>
            <ThirdBounce></ThirdBounce>
        </Spinner>
    );
};


export default Loader;

const Spinner = styled.div`
    margin: 100px auto 0;
    width: 70px;
    text-align: center;
    height: 340px;
`;

const bounceDelay = keyframes`
    0%, 80%, 100% { 
         transform: scale(0);
    }

    40% { 
        transform: scale(1.0);
    }

`;
const Bounce = styled.div`
    width: 18px;
    height: 18px;
    background-color: #000;
    border-radius: 100%;
    display: inline-block;
    animation: ${bounceDelay} 1.4s infinite ease-in-out both;
`;

const SecondBounce = styled(Bounce)`
    animation-delay: -0.16s;
`;
const ThirdBounce = styled(Bounce)`
    animation-delay: -0.16s;
    animation-delay: -0.32s;
`;


import React from 'react';
import styled from 'styled-components';

const FooterLayout = styled.div`
    bottom: 0;
    left: 0;
    padding: 1rem;
    text-align: center;
    width: 100%;
    color: black;
    font: bold 1em Georgia, Times, "Times New Roman", serif;
    background-color: #e7e7e7;
`

const Footer = () => {
    return ( 
        <FooterLayout>
            <h4>© 2023 NANETTE KAYE DOLERA </h4>
        </FooterLayout>
     );
}
 
export default Footer;

import React from 'react';
import styled from 'styled-components';

const FooterLayout = styled.div`
    position: fixed;
    bottom: 0;
    left: 0;
    padding: 1rem;
    text-align: center;
    width: 100%;
    color: black;
    font: bold 1em Georgia, Times, "Times New Roman", serif;
    background: pink;
`

const Footer = () => {
    return ( 
        <FooterLayout>
            <h4>© 2023 Nanette Kaye Dolera. All rights reserved. </h4>
            <h6>i will probably include social media logos down here like Cara Cara Wireframe</h6>
        </FooterLayout>
     );
}
 
export default Footer

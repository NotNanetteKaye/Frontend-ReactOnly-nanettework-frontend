import React from 'react';
import styled from 'styled-components';

const FooterLayout = styled.div`
    background: rgb(231 231 231);
    position: fixed;
    width: 100%;
    display: grid;

`

const Footer = () => {
    return ( 
        <FooterLayout>
            <h4>© 2023 nanette kaye dolera. all rights reserved. </h4>
        </FooterLayout>
     );
}
 
export default Footer

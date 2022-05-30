import styled, { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const StyledGlobal = createGlobalStyle`
    ${reset}
`;

export const StyledAppContainer = styled.div`
    padding: 0;
    margin: 0;
`;

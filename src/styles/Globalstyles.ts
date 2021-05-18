import { createGlobalStyle } from 'styled-components';
import Aksara from '../font/font';

export default createGlobalStyle`
${Aksara};
* {
    margin:0;
    padding:0;
    box-sizing: border-box;
}
html, border-style, #root {
    max-height: 100vh;
    max-width:100vw;

    height: 100%;
    width: 100%;

}*, button, input {
    border: 0;
    background: none;
     font-family:${Aksara};
}
html {
    background: var(--primary);
}
:root {
    --primary: #2E3036;
    --gray: #8E9297;
    --white: #FFFFFF;
    --green: #43B581;
    --dark-gray:#202225;
    --icon-wrapper:#36393F;

}
`;
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import { normalize } from "styled-normalize";


export default createGlobalStyle`
    ${reset}
    ${normalize}
    @import url(//cdn.rawgit.com/hiun/NanumSquare/master/nanumsquare.css);
    @font-face {
        font-family: 'GodoB', sans-serif;
        font-weight: 50;
        src: url("../Fonts/GodoB.ttf");
    }
    html{
        font-size: 10px;
        font-family: 'NanumSquare', sans-serif !important;
    }
    * {
        box-sizing: border-box;
    }
`;

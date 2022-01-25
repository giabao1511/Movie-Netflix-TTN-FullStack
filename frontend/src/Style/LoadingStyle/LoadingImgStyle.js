import { createGlobalStyle } from "styled-components";

export const LoadingImgStyle = createGlobalStyle`
.load-page{
    background: #fff;
    overflow: hidden;
  }
  .loader{
    width: 300px;
    height: 300px;
    margin: auto;
  }
  .loader div{
    width: calc(100% - 15px);
    height: calc(100% - 15px);
    border: 2px solid #fff;
    border-top: 2px solid crimson;
    border-radius: 50%;
    animation: rotate 10s linear infinite alternate-reverse;
  }
  @keyframes rotate{
    50%{
    }
    100%{
        transform: rotate(360deg);
    }
  }

`;

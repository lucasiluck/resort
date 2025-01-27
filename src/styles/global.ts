import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root{
        --white : #FFFFFF;
        --salmon : #DA7779;
        --background-blue : #BEE3EC;
        --text-gray : #6F6F6F;
        --text-brown : #917B7F;
        background-color : rgba(255, 255, 255, 1);
    }

    *{
        margin: 0px;
        padding: 0px;
        box-sizing: border-box;
        list-style-type: none;  
    }


    html{
        @media (max-width: 1080px){
            font-size: 93.75%;
        }

        @media (max-width: 720px){
            font-size: 87.5%;
        }
    }

    body{
        background: var(--shape);
        --webkit-font-smoothing: antialiased;
    }

    body,input,textarea,button{
        font-family: 'Kameron', sans-serif;
        font-weight: 700;
        border:none;
    }

    h1,h2,h3,h4,h5,h6,strong{
        font-weight: 700;
    }

    button{
        cursor: pointer;
    }

    [disable]{
        opacity: 0.6;
        cursor: not-allowed;
    }
`
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    /* Set default font size */
    html{
        font-size:62.5%;
    }
    /* Remove all the default spacing gap */
    *,
    *::before,
    *::after {
        margin:0;
        padding:0;
        box-sizing: border-box;
    }
    /* For keyboard user*/
    *:focus-visible{
        outline: 2px dashed rgba(90, 119, 255, 1) ;
        outline-offset: 5px ;
        transition:all .3s ease;
    }

    /* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
    ul[role='list'],
    ol[role='list'],
    li {
        list-style: none;
    }

    /* Remove anchor decoration*/
    a{
        text-decoration:none ;
    }

    /* Reset button */
    button{
        padding:0;
        border:0;
    }

    /* Set core root defaults */
    html,
    html:focus-within {
        scroll-behavior: smooth;
    }

    /* Set core body defaults */
    body {
        min-height: 100vh;
        text-rendering: optimizeSpeed;
        line-height: 1.5;
        background: hsl(0, 0%, 100%);
        overflow-x: hidden;
        font-family:'DM Sans','arial';
    }
    /* Make images easier to work with */
    img,
    picture {
        max-width: 100%;
        display: block;
    }
    /* Inherit fonts for inputs and buttons */
    input,
    button,
    textarea,
    select,
    a {
        font: inherit;
        color:inherit;
    }
    /* Remove all animations, transitions and smooth scroll for people that prefer not to see them */
    @media (prefers-reduced-motion: reduce) {
        html:focus-within {
            scroll-behavior: auto;
        }
        
        *,
        *::before,
        *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
            scroll-behavior: auto !important;
        }
    }
`
export default GlobalStyle
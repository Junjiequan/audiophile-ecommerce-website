import { keyframes } from 'styled-components'


export const ANIMATION = {
    flashy:keyframes`
        0%{opacity:1}
        15%{opacity:0.2}
        17%{opacity:0}
        19%{opacity:0.2}
        21%{opacity:0}
        23%{opacity:0.2}
        25%{opacity:0}
        27%{opacity:0.2}
        29%{opacity:0}
        31%{opacity:0.2}
        36%{opacity:0}
        65%{opacity:1}
    `,
    jelloHorizontal:keyframes`
    0% {transform: scale3d(1, 1, 1);}
    25% {transform: scale3d(1.2, 0.8, 1);}
    50% {transform: scale3d(0.9, 1.1, 1);}
    75% {transform: scale3d(1.05, 0.95, 1);}
    100% {transform: scale3d(1, 1, 1);}
    `,
}
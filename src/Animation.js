import { keyframes } from 'styled-components'


export const ANIMATION = {
    flashy:keyframes`
        15%{opacity:0.4}
        18%{opacity:0.2}
        21%{opacity:0.4}
        24%{opacity:0.2}
        27%{opacity:0.4}
        30%{opacity:0.2}
        33%{opacity:0.4}
        36%{opacity:0.2}
        39%{opacity:0.4}
        44%{opacity:0.1}
        100%{opacity:1}
    `,
    jelloHorizontal:keyframes`
        0% {transform: scale3d(1, 1, 1);}
        30% {transform: scale3d(1.25, 0.75, 1);}
        40% {transform: scale3d(0.75, 1.25, 1);}
        50% {transform: scale3d(1.15, 0.85, 1);}
        65% {transform: scale3d(0.95, 1.05, 1);}
        75% {transform: scale3d(1.05, 0.95, 1);}
        100% {transform: scale3d(1, 1, 1);}
    `
}
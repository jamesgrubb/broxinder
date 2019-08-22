import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"
import colors from "colors.css"



const ShowcaseImageWrapper = styled.div`
width: ${props => props.width || "50%"};
transform: rotate(${props => props.rotate||0}deg );
z-index: ${props => props.zIndex};
transform-origin: center center;
grid-area: ${props=> props.gridArea};

justify-self: ${props => props.align || "center"};
margin: ${props => props.margin};
`


const Showcase = styled.div`
margin: 10vmax 0;
background: ${colors.navy};
width: 100%;
height: 100%;
display: flex;
display: grid;
grid-template-columns: 1fr 1fr 1fr;
flex: 1;
place-items: center;
grid-template-areas:
" I P P "
`
const ShowcaseHeadline = styled.h2`
font-size: 1rem;
`
const ShowcaseDetails = styled.p`
font-size: 100%;
`
const ShowcaseMockup = styled(Img)`
        
        grid-area: P;    
`
const ShowcaseWordmark = styled(ShowcaseMockup)`
        grid-area: P;    

`

const ShowcaseIcon = styled(ShowcaseMockup)`
        grid-area: I
`


export {ShowcaseMockup, Showcase, ShowcaseWordmark, ShowcaseIcon, ShowcaseImageWrapper}

/* ShowcaseWrapper, Showcase, ShowcaseHeadline, ShowcaseDetails, ShowcaseMockup, ShowcaseWordmark */
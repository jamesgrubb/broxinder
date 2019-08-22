import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"


const ShowcaseWrapper = styled.div`
height: 100vh;
display: flex;
align-items: center;
justify-content: center
`
const Showcase = styled.div`
background: cornflowerblue;
width: 100%;
height: 100vh;
display: grid;
grid-template-columns: 1fr 1fr 1fr;
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
    
    display: grid !important;
       div[style]:empty {
        padding: 0 !important;    
/*      
        
        border: 1px solid red;
        padding: 0 !important; */
    }
    
    picture > img{
    position: relative !important;        
    width: ${props => props.width || "60%"} !important;    
    height: auto !important;
    align-self: center !important!;
    };
    > img {
    width: ${props => props.width || "60%"} !important;            
    height: auto !important;
    }
`
const ShowcaseWordmark = styled(ShowcaseMockup)`

opacity: 0.3;
`

const ShowcaseIcon = styled(ShowcaseMockup)`

    display: grid;
    place-items: center;

picture > img{    
    
    width: 70%;
    };

grid-area: I;
`


export {ShowcaseMockup, Showcase, ShowcaseWordmark, ShowcaseIcon}

/* ShowcaseWrapper, Showcase, ShowcaseHeadline, ShowcaseDetails, ShowcaseMockup, ShowcaseWordmark */
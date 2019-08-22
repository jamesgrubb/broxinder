import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"
import colors from "colors.css"

const ShowcaseImageWrapper = styled.div`
width: 50%;
grid-area: ${props=> props.gridArea}
`

const ShowcaseWrapper = styled.div`
height: 100vh;
display: flex;
align-items: center;
justify-content: center
`
const Showcase = styled.div`
background: ${colors.navy};
width: 100%;
height: 100vh;
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

opacity: 0.3;
`

const ShowcaseIcon = styled(ShowcaseMockup)`
`


export {ShowcaseMockup, Showcase, ShowcaseWordmark, ShowcaseIcon, ShowcaseImageWrapper}

/* ShowcaseWrapper, Showcase, ShowcaseHeadline, ShowcaseDetails, ShowcaseMockup, ShowcaseWordmark */
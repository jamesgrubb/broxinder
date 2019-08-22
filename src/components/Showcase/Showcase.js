import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"


const ShowcaseWrapper = styled.div`
height: 100vh;
display: flex;
align-items: center;
justify-content: center
`
const Showcase = styled.div.attrs({
    className: "className"
})`
height: 100%;
border: 1px solid red;
/* display: flex;
flex-wrap: wrap;
justify-content: space-around */
`
const ShowcaseHeadline = styled.h2`
font-size: 1rem;
`
const ShowcaseDetails = styled.p`
font-size: 100%;
`



const ShowcaseMockup = styled(Img)`
max-width: 100%;
align-self: center;
justify-self: center;
`
const ShowcaseWordmark = styled(ShowcaseMockup)``

const ShowcaseIcon = styled(ShowcaseMockup)``


export {ShowcaseMockup, Showcase, ShowcaseWordmark, ShowcaseIcon}

/* ShowcaseWrapper, Showcase, ShowcaseHeadline, ShowcaseDetails, ShowcaseMockup, ShowcaseWordmark */
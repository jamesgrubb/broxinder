import React from "react"
// import {ShowcaseWrapper, Showcase, ShowcaseHeadline, ShowcaseDetails, ShowcaseWordmark, ShowcaseMockup } from "../components/Showcase"
import {ShowcaseImageWrapper, ShowcaseMockup, Showcase, ShowcaseWordmark, ShowcaseIcon} from "../components/Showcase/Showcase"
import { graphql } from "gatsby";
import styled, {createGlobalStyle} from "styled-components"
import { normalize } from "styled-normalize"
import colors from "colors.css"

const GlobalStyles = createGlobalStyle`
@import url("https://fonts.googleapis.com/css?family=Livvic:300,300i,600&display=swap");
${normalize};
*{box-sizing: border-box;}
body{
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: ${colors.silver};
    background: ${colors.navy}
}
h1,h2,h3{
    font-family: "Livvic", sans-serif;
    color: ${colors.silver};
    font-weight: 300;
    font-size: 6vmax;
}
`
const PageWrapper = styled.div`
margin: 4vmax;
`

export default ({data}) => {
    const [...mockups] = data.mockups.edges
    const [...logos] = data.logos.edges
    const [...icons] = data.icons.edges
   

    console.log(mockups.length)
    let showcase = [];

    for(let i=0; i< mockups.length; i++){
        console.log(mockups[i].node.relativePath)
        showcase.push(
        <Showcase key={logos[i].node.childImageSharp.id}>
            <ShowcaseImageWrapper width="25%">
            <ShowcaseIcon loading="auto" fluid={icons[i].node.childImageSharp.fluid} />
            </ShowcaseImageWrapper>
            <ShowcaseImageWrapper zIndex="1" gridArea="P">
            <ShowcaseMockup loading="auto" fluid={mockups[i].node.childImageSharp.fluid} />
            </ShowcaseImageWrapper>
            <ShowcaseImageWrapper margin="0 0 0 -8vmax " align="start" width="80%" rotate="-90" gridArea="P">
            <ShowcaseWordmark loading="auto" fluid={logos[i].node.childImageSharp.fluid} />
            </ShowcaseImageWrapper>
        </Showcase>
        )
    }
return(
<PageWrapper>
<GlobalStyles />
    {showcase}
</PageWrapper>)}

export const query = graphql`
query {
    details: allJsonDataJson {
        edges {
          node {
            title
            description
          }
        }
      }
    mockups: allFile(filter: {ext: {eq: ".png"}, relativePath: {regex: "\/Mockups/"}}) {
        edges {
          node {
            relativePath
            childImageSharp {
              id
              fluid(maxWidth: 500, srcSetBreakpoints: [ 200, 340, 520, 800, 890 ]) {
                base64
                tracedSVG
                aspectRatio
                src
                srcSet
                srcWebp
                srcSetWebp
                sizes
                originalImg
                originalName
                presentationWidth
                presentationHeight
              }
            }
          }
        }
      }
      logos: allFile(filter: {ext: {eq: ".png"}, relativePath: {regex: "\/Logomarks/"}}){
        edges {
          node {
              relativePath
            childImageSharp {
              id
              fluid(maxWidth: 500,srcSetBreakpoints: [ 200, 340, 520, 800, 890 ]) {
                base64
                tracedSVG
                aspectRatio
                src
                srcSet
                srcWebp
                srcSetWebp
                sizes
                originalImg
                originalName
                presentationWidth
                presentationHeight
              }
            }
          }
        }
      }
      icons: allFile(filter: {ext: {eq: ".png"}, relativePath: {regex: "\/Icons/"}}){
        edges {
          node {
              relativePath
            childImageSharp {
              id
              fluid(maxWidth: 500,srcSetBreakpoints: [ 200, 340, 520, 800, 890 ]) {
                base64
                tracedSVG
                aspectRatio
                src
                srcSet
                srcWebp
                srcSetWebp
                sizes
                originalImg
                originalName
                presentationWidth
                presentationHeight
              }
            }
          }
        }
      }
    }
`

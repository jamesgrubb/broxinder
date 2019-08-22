import React from "react"
// import {ShowcaseWrapper, Showcase, ShowcaseHeadline, ShowcaseDetails, ShowcaseWordmark, ShowcaseMockup } from "../components/Showcase"
import {ShowcaseImageWrapper, ShowcaseMockup, Showcase, ShowcaseWordmark, ShowcaseIcon} from "../components/Showcase/Showcase"
import { graphql } from "gatsby";

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
            <ShowcaseImageWrapper>
            <ShowcaseIcon  loading="auto" fluid={icons[i].node.childImageSharp.fluid} />
            </ShowcaseImageWrapper>
            <ShowcaseImageWrapper gridArea="P">
            <ShowcaseMockup loading="auto" fluid={mockups[i].node.childImageSharp.fluid} />
            </ShowcaseImageWrapper>
            <ShowcaseImageWrapper gridArea="P">
            <ShowcaseWordmark loading="auto" fluid={logos[i].node.childImageSharp.fluid} />
            </ShowcaseImageWrapper>
        </Showcase>
        )
    }
return(
<div>
    {showcase}

<h1>Hello World</h1>
</div>)}

const AllShowcases = ({mockups, logos}) => {
    
    return (
    <div>
        <Showcase mockups={mockups} logos={logos}>
            {mockups.map((d,i) => <ShowcaseMockup loading="auto" key={d.node.childImageSharp.id} fluid={d.node.childImageSharp.fluid} alt="image"/>)}
            {logos.map((lg,i) => <ShowcaseWordmark fluid={lg.node.childImageSharp.fluid} />)}
        </Showcase>
        }
    </div>    
    )
}
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

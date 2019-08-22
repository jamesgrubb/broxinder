import React from "react"
// import {ShowcaseWrapper, Showcase, ShowcaseHeadline, ShowcaseDetails, ShowcaseWordmark, ShowcaseMockup } from "../components/Showcase"
import {ShowcaseMockup, Showcase, ShowcaseWordmark, ShowcaseIcons} from "../components/Showcase/Showcase"
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
        <Showcase>
        <ShowcaseMockup loading="auto" key={mockups[i].node.child} fluid={mockups[i].node.childImageSharp.fluid} />
        <ShowcaseWordmark loading="auto" key={logos[i].node.child} fluid={logos[i].node.childImageSharp.fluid} />
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
              fluid(maxWidth: 700, srcSetBreakpoints: [ 200, 340, 520, 890 ]) {
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
              fluid {
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
              fluid {
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

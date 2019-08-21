import React from "react"
// import {ShowcaseWrapper, Showcase, ShowcaseHeadline, ShowcaseDetails, ShowcaseWordmark, ShowcaseMockup } from "../components/Showcase"
import {ShowcaseMockup, Showcase, ShowcaseWordmark} from "../components/Showcase/Showcase"
import { graphql } from "gatsby";

export default ({data}) => {
    const [...mockups] = data.mockups.edges
    const [...logos] = data.logos.edges
    console.log(mockups[1])
return(
<div>
    {data && 
    <>
    <AllShowcases mockups={mockups} logos={logos}/>
    {/* <Showcase>
    {   mockups.map(d => <ShowcaseMockup loading="auto" key={d.node.childImageSharp.id} fluid={d.node.childImageSharp.fluid} alt="image"/>)}
    </Showcase> */}
    </>
    }

<h1>Hello World</h1>
</div>)}

const AllShowcases = ({mockups, logos, details}) => {
    
    return (
    
        <Showcase mockups={mockups} logos={logos}>
            {mockups.map((d,i) => <ShowcaseMockup loading="auto" key={d.node.childImageSharp.id} fluid={d.node.childImageSharp.fluid} alt="image"/>)}
            {logos.map((lg,i) => <ShowcaseWordmark fluid={lg.node.childImageSharp.fluid} />)}
        </Showcase>
        
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
    }
`

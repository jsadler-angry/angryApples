import React from "react"
import { graphql } from "gatsby"
import RichText from "../components/RichText"
import Layout from "../components/layout"
import SliceZone from '../components/sliceZone'


export const query = graphql`
query PageQuery($id: String) {
prismic {
    allPages(id: $id) {
      edges {
        node {
          _meta {
            id
            uid
          }
          body {
            ... on PRISMIC_PageBodyHero_2 {
              type
              label
              primary {
                hero_2_image
                hero_caption
              }
            }
            ... on PRISMIC_PageBodyImage_gallery {
              label
              fields {
                image_captions
                gallery_image
              }
              type
            }
          }
        }
      }
    }
  }
}

`

const Page = (props) => {
  console.log(props);
  // const pageTitle = props.data.prismic.allPages.edges[0].node.page_title
  // const content = props.data.prismic.allPages.edges[0].node.page_content
  // const pageHeaderImg = props.data.prismic.allPages.edges[0].node.page_image.url;

  return (
    <>

      <Layout>
        <SliceZone body={props.data.prismic.allPages.edges[0].node.body} />
        {/* <RichText render={pageTitle} />
        <div>
          <img alt={props.data.prismic.allPages.edges[0].node.page_image.alt} src={pageHeaderImg} />
        </div>
        <RichText render={content} /> */}
      </Layout>
    </>
  )
}

export default Page
import React from "react"
import { graphql } from "gatsby"
import RichText from "../components/RichText"
import Layout from "../components/layout"


export const query = graphql`
query PageQuery($id: String) {
prismic {
    allPages(id: $id) {
      edges {
        node {
          page_title
          page_content
          page_image
          _meta {
            id
            uid
          }
        }
      }
    }
  }
}

`

const Page = (props) => {
  console.log(props);
  const pageTitle = props.data.prismic.allPages.edges[0].node.page_title
  const content = props.data.prismic.allPages.edges[0].node.page_content
  const pageHeaderImg = props.data.prismic.allPages.edges[0].node.page_image.url;

  return (
    <>

      <Layout>
        <RichText render={pageTitle} />
        <div>
          <img alt={props.data.prismic.allPages.edges[0].node.page_image.alt} src={pageHeaderImg} />
        </div>
        <RichText render={content} />
      </Layout>
    </>
  )
}

export default Page
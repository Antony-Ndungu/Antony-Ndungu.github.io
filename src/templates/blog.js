import React from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby"

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date
      }
      html
    }
  }
`

export default (props) => {
  return (
    <Layout>
      <div className="w3-content w3-card" style={{ maxWidth: "750px" }}>
        <h1 className="w3-center w3-theme" style={{ paddingLeft: "0" }}>{props.data.markdownRemark.frontmatter.title}</h1>
        <div className="w3-container w3-white">
          <p>{props.data.markdownRemark.frontmatter.date}</p>
          <div
            dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}
          ></div>
        </div><footer className="w3-container w3-center" style={{ padding: ".2rem", opacity: 0 }}>
          <p className="w3-small">Created by Antony Ndungu, &copy; 2019</p>
        </footer>
      </div>
    </Layout>
  );
}
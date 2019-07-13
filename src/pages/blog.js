import React from "react";
import Layout from "../components/layout";
import { graphql, useStaticQuery, Link } from "gatsby";



export default () => {
    const data = useStaticQuery(graphql`
        {
            allMarkdownRemark {
                edges {
                    node {
                        frontmatter {
                            date
                            title
                            description
                        },
                        fields {
                            slug
                        }
                        id
                    }
                }
            }
        } 
    `);
    return (
        <Layout>
            <p className="w3-center">Under Construction</p>
            <div className="w3-container w3-center w3-padding-16">
                <h5><span className="w3-tag w3-theme w3-wide">MY BLOG</span></h5>
            </div>
            {data.allMarkdownRemark.edges.map( edge => (
                <div className="w3-container w3-margin-bottom" key={edge.node.id}>
                    <div className="w3-content w3-card-2 w3-padding-18 w3-white" style={{ maxWidth: "750px" }}>
                        <div className="w3-container">
                            <h3><b>{edge.node.frontmatter.title}</b></h3>
                            <h5><span className="w3-opacity">{edge.node.frontmatter.date}</span></h5>
                            <p>{edge.node.frontmatter.description}</p>
                            <p><Link to={`/blog/${edge.node.fields.slug}`} className="w3-button w3-padding-large w3-border w3-border-theme"><b>READ MORE >></b></Link></p>
                        </div>
                    </div>
                </div>
            ))}
            <div className="w3-container w3-margin-bottom" style={{opacity: 0}}>
                <div className="w3-content w3-card-2 w3-padding-18" style={{ maxWidth: "750px" }}>
                    <div className="w3-container">
                        <h3><b></b></h3>
                        <h5><span className="w3-opacity"></span></h5>
                        <p></p>
                        <p><a href="/" className="w3-button w3-padding-large w3-border w3-border-theme"><b>READ MORE >></b></a></p>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
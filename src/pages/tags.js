import React, { Component } from "react"
import { Helmet } from "react-helmet"
import { Link, graphql } from "gatsby"
import kebabCase from "lodash.kebabcase"
import Layout from "../layout"
import SEO from "../components/seo"
import config from "../../data/SiteConfig"

export default class TagsPage extends Component {
  render() {
    const { group } = this.props.data.allMarkdownRemark //&& this.props.data.allMarkdownRemark.group

    return (
      <Layout>
        <SEO />
        <Helmet title={`Tags – ${config.siteTitle}`} />
        <div className="container">
          <h1>Tags</h1>
          <div className="tag-container">
            {group.map(tag => (
              <Link to={`/tags/${kebabCase(tag.fieldValue)}`}>
                <span key={tag.fieldValue}>
                  {tag.fieldValue}{" "}
                  <strong className="count">
                    {tag.totalCount} post{tag.totalCount === 1 ? "" : "s"}
                  </strong>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </Layout>
    )
  }
}

export const pageQuery = graphql`
  query TagsQuery {
    allMarkdownRemark(filter: { frontmatter: { published: { ne: false } } }) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`

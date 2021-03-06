import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import blogstyle from "./blog-template.module.css"
import SEO from "../components/SEO1"
import { DiscussionEmbed } from "disqus-react"

import {
  FacebookIcon,
  TwitterIcon,
  PinterestIcon,
  RedditIcon,
  TumblrIcon,
  EmailIcon,
  FacebookShareButton,
  TwitterShareButton,
  PinterestShareButton,
  RedditShareButton,
  TumblrShareButton,
  EmailShareButton,
} from "react-share"

const Blog = ({ data, pageContext }) => {
  const {
    title,
    slug,
    publishDate,
    richbody: { json },
  } = data.post

  const baseUrl = "https://baileeapp.com/blog/"

  const disqusShortname = "bailee-1"
  const disqusConfig = {
    identifier: pageContext.slug,
    title: title,
    url: baseUrl + pageContext.slug,
  }

  const shareCount = {
    url: baseUrl + pageContext.slug,
  }

  const options = {
    renderNode: {
      "embedded-asset-block": node => {
        return (
          <div className={blogstyle.rich}>
            <img
              width="400"
              alt={slug}
              src={node.data.target.fields.file["en-US"].url}
            />
          </div>
        )
      },
    },
  }

  return (
    <Layout>
      <SEO title={title} />

      <section className={blogstyle.blog}>
        <div className={blogstyle.socialbar}>
          <div className={blogstyle.social}>
            <FacebookShareButton url={shareCount.url}>
              <FacebookIcon size={32} round={true} />
            </FacebookShareButton>
          </div>
          <div className={blogstyle.social}>
            <TwitterShareButton url={shareCount.url}>
              <TwitterIcon size={32} round={true} />
            </TwitterShareButton>
          </div>
          <div className={blogstyle.social}>
            <PinterestShareButton url={shareCount.url}>
              <PinterestIcon size={32} round={true} />
            </PinterestShareButton>
          </div>
          <div className={blogstyle.social}>
            <RedditShareButton url={shareCount.url}>
              <RedditIcon size={32} round={true} />
            </RedditShareButton>
          </div>
          <div className={blogstyle.social}>
            <TumblrShareButton url={shareCount.url}>
              <TumblrIcon size={32} round={true} />
            </TumblrShareButton>
          </div>
          <div className={blogstyle.social}>
            <EmailShareButton url={shareCount.url}>
              <EmailIcon size={32} round={true} />
            </EmailShareButton>
          </div>
        </div>
        <div className={blogstyle.center}>
          <h1>{title}</h1>
          <h4>Published at : {publishDate}</h4>

          <article className={blogstyle.post}>
            {documentToReactComponents(json, options)}
          </article>
          <div className={blogstyle.btnwrapper}>
            <Link to="/blogs" className={blogstyle.btnprimary}>
              all posts
            </Link>
          </div>
        </div>
        <div className={blogstyle.center}>
          <DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
        </div>
      </section>
    </Layout>
  )
}

//have to set variable in graphql first? getPost
export const query = graphql`
  query getPost($slug: String!) {
    post: contentfulBlogPost(slug: { eq: $slug }) {
      title
      slug
      publishDate(formatString: "MMMM Do, YYYY")
      richbody {
        json
      }
    }
  }
`
export default Blog

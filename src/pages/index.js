import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="Hero">
      <div className="HeroGroup">
        <h1>
         Learn to design and code react apps.
         
        </h1>
        <p>Welcome to my web site!</p>
        <a href="#">Watch the video</a>
      </div>
    </div>
    
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Click here to go to the next page</Link>
  </Layout>
)

export default IndexPage

import React from 'react'
import { graphql } from 'gatsby'

import PageHeader from '../components/PageHeader'
import Content from '../components/Content.js'
import Layout from '../components/Layout.js'
import Accordion from '../components/Accordion'
import Gallery from '../components/Gallery'

// Export Template for use in CMS preview
export const ServicesPageTemplate = ({
  title,
  subtitle,
  featuredImage,
  section1,
  accordion,
  gallery
}) => (
  <main>
    <PageHeader
      title={title}
      subtitle={subtitle}
      backgroundImage={featuredImage}
    />
    <section className="section">
      <div className="container">
        <Content source={section1} />
        <form action="https://www.gapvinc.com/contact/">
          <input type="submit" value="Contact us here" className="Button Form--SubmitButton"/>
        </form>
      </div>
    </section>

    <section className="section">
      <div className="container">
        <Accordion items={accordion} />
      </div>
    </section>
    
    <section className="section">
      <div className="container">
        <h2>Industry Participation</h2>
        <Gallery images={gallery} />
      </div>
    </section>

  </main>
)

const ServicesPage = ({ data: { page } }) => (
  <Layout
    meta={page.frontmatter.meta || false}
    title={page.frontmatter.title || false}
  >
    <ServicesPageTemplate {...page} {...page.frontmatter} body={page.html} />
  </Layout>
)

export default ServicesPage

export const pageQuery = graphql`
  query ServicesPage($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      ...Meta
      ...Gallery
      html
      frontmatter {
        title
        template
        subtitle
        featuredImage
        section1
        accordion {
          title
          description
        }
      }
    }
  }
`

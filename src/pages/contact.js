import React from "react"
import Layout from "../components/layout"
import ContactForm from "../components/Contact/contactform"

import SEO from "../components/SEO1"

const contact = () => {
  return (
    <Layout>
      <SEO
        title="Contact"
        description="black owned business directory contact us"
      />

      <ContactForm />
    </Layout>
  )
}

export default contact

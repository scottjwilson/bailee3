import React, { Component } from "react"
import SEO from "../components/SEO1"
import Layout from "../components/layout"
import Hero from "../components/hero"
import Businesses from "../components/Businesses/Businesses"

export default class businesses extends Component {
  render() {
    return (
      <Layout>
        <SEO
          title="Businesses"
          description="best black owned business directory bailee businesses"
        />
        <Hero />
        <Businesses />
      </Layout>
    )
  }
}

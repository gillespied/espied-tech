import React from 'react'
import PropTypes from 'prop-types'
import Layout from '../components/Layout'

export default class IndexPage extends React.Component {
  render() {

    return (
      <Layout>
    <section className="section section--gradient">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="section">
              <h1 className="has-text-weight-bold is-size-1 has-text-centered">Hello</h1>
               <p>My name is David. I'm a freelance data-science and web developer working in Nottingham.</p>
               
              <p>Most companies are now generating more data than they know what to so with. If you are one of those companies, get in touch to discuss how to turn data into actionable information.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
      </Layout>
    )
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}



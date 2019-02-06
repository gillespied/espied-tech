import React from 'react'
import Layout from '../components/Layout'
import { Link } from 'gatsby';

const NotFoundPage = () => (
  <Layout>
    <div>
      <h1>NOT FOUND</h1>
      <p>If you followed a link from the site, please let me know via <Link to='contact'>the contact page.</Link></p>
    </div>
  </Layout>
)

export default NotFoundPage

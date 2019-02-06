import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import Layout from '../components/Layout';

const IndexPage = () => (
  <Layout>
    <section className="hero is-link is-fullheight-with-navbar has-background-primary">
      <div className="hero-body">
        <div className="container">
          <p className="title">Data Science and Web Development</p>
          <p className="subtitle">
            espied.tech is the home page for me, David Gillespie. I offer data science development
            on a freelance or contract basis. I'm based in Nottingham, but also available for remote
            work.
          </p>
          <p className="subtitle">
            To discuss how I could help make sense of your data get in touch either with
            {' '}
            <Link style={{ textDecoration: 'underline' }} to="./contact/">
              the contact form
            </Link>
            {' '}
            or
            {' '}
            <Link
              style={{ textDecoration: 'underline' }}
              to="https://www.linkedin.com/in/davidjgillespie/"
            >
              add me on linkedin.
            </Link>
          </p>
        </div>
      </div>
    </section>
  </Layout>
);

export default IndexPage;

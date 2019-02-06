import React from "react";
import PropTypes from "prop-types";
import Layout from "../components/Layout";
import { Link } from "gatsby";

export default class IndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <section className="hero is-link is-fullheight-with-navbar has-background-primary">
          <div className="hero-body">
            <div className="container">
              <p className="title">
                Freelance Data Science and Web Development
              </p>
              <p className="subtitle">
                espied(dot)tech is me, David Gillespie I am an experienced data
                science developer based in Nottingham. Available for both
                freelance or contract work.
              </p>
              <p className="subtitle">
                To discuss how I could help make sense of your data get in touch
                either with{" "}
                <Link style={{ textDecoration: "underline" }} to="./contact/">
                  the contact form
                </Link>{" "}
                or{" "}
                <Link
                  style={{ textDecoration: "underline" }}
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
  }
}

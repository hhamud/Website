import React, { Fragment } from "react";
import Header from "./Header";
import Main from "./Main";
import About from "./About";
import Portfolio from "./Portfolio";
import BlogList from "../Bloglist";
import BlogDetail from "../BlogDetail";
import { Route, Switch } from "react-router-dom";
import axios from "axios";
import Footer from "./Footer";

class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isLoading: true };
  }

  componentDidMount() {
    let base_url = process.env.REACT_APP_API_ENDPOINT  || "https://agile-citadel-92315.herokuapp.com" ;
    axios
      .get(`${base_url}/api/blog`)
      .then((res) => {
        this.setState({ posts: res.data });
        this.setState({ isLoading: false });
      })
      .catch((err) => console.log(err));
  }

  render() {
    const { isLoading } = this.state;

    if (isLoading) {
      return <div className="App">Loading...</div>;
    }

    return (
      <body>
        <Header posts={this.state.posts} />
        <Switch>
          <Route exact path="/blog">
            <BlogList posts={this.state.posts} />
          </Route>
          {this.state.posts
            .filter((post) => post.catagory === "blog")
            .map((post, i) => (
              <Route key={i} path={`/blog/${post.slug}`}>
                <BlogDetail post={post} />
              </Route>
            ))}
          <Route
            path="/"
            render={(props) => (
              <Fragment>
                <Main />
                <About />
                <Portfolio posts={this.state.posts} />
              </Fragment>
            )}
          />
        </Switch>
        <Footer />
      </body>
    );
  }
}

export default Layout;

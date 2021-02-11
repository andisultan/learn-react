import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import PageBlog from "pages/blog";
import PageAbout from "pages/about";
import PageHome from "pages/home";
import Page404 from "pages/404";
import PageProduct from "pages/product";
import PageLogin from "pages/login";
import PageRegister from "pages/register";

export default function AppRoute() {
  return (
    <Router>
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/login">
            <PageLogin />
          </Route>
          <Route path="/register">
            <PageRegister />
          </Route>
          <Route path="/about">
            <PageAbout />
          </Route>
          <Route path="/blog">
            <PageBlog />
          </Route>
          <Route path="/product">
            <PageProduct />
          </Route>
          <Route exact path="/">
            <PageHome />
          </Route>
          <Route path="*">
            <Page404 />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
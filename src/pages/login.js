import { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Site from "layouts/site";
import Container from "components/container";
import FormItem from "components/form-item";
import Button from "components/button";
// actions 
import { authLogin } from "redux/actions/auth";

const PageLogin = ({ authLogin }) => {
  const [identifier, setIdentifier] = useState();
  const [password, setPassword] = useState();

  const onSubmit = (e) => {
    e.preventDefault();
    const data = { identifier, password }
    authLogin(data)
  }

  return (
    <Site>
      <Container>
        <form onSubmit={onSubmit}>
          <FormItem>
            <label htmlFor="identifier">Username or Email</label>
            <input 
              type="text" 
              name="identifier" 
              id="identifier" 
              value={identifier} 
              onChange={ (e) => setIdentifier(e.target.value)}
            />
          </FormItem>
          <FormItem>
            <label htmlFor="password">Password</label>
            <input 
              type="password" 
              name="password" 
              id="password" 
              value={password} 
              onChange={ (e) => setPassword(e.target.value)}
            />
          </FormItem>
          <FormItem>
            <Button type="submit">Login</Button>
          </FormItem>
          <span>Don't have an account? <Link to="/register">Register</Link></span>
        </form>
      </Container>
    </Site>
  );
}

export default connect(null, { authLogin })(PageLogin);
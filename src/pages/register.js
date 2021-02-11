import { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Site from "layouts/site";
import Container from "components/container";
import FormItem from "components/form-item";
import Button from "components/button";
// actions 
import { authRegister } from "redux/actions/auth";

const PageRegister = ({ authRegister }) => {
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const onSubmit = (e) => {
    e.preventDefault();
    const data = { username, email, password}
    authRegister(data)
  }

  return (
    <Site>
      <Container>
        <form onSubmit={onSubmit}>
          <FormItem>
            <label htmlFor="username">Username</label>
            <input 
              type="text" 
              name="username" 
              id="username" 
              value={username}
              onChange={ (e) => setUsername(e.target.value)}
            />
          </FormItem>
          <FormItem>
            <label htmlFor="email">Email</label>
            <input 
              type="email" 
              name="email" 
              id="email"
              value={email}
              onChange={ (e) => setEmail(e.target.value)}
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
            <Button type="submit">Register</Button>
          </FormItem>
          <span>have an account? <Link to="/login">Login</Link></span>
        </form>
      </Container>
    </Site>
  );
}

export default connect(null, { authRegister })(PageRegister);
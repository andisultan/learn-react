import { Link } from "react-router-dom";
import styled from 'styled-components';
import { COLOR_PRIMARY } from "utils/colors";

const Header = styled.header`
  background: ${COLOR_PRIMARY};
  padding: 30px 0;
  color: #FFFFFF;
  text-align: center;

  a {
    color: #FFFFFF;
    padding: 10px;

    &:hover {
      color: red;
    }
  }
`;


const SiteHeader = () => {
  return (
    <Header>
      <span>Andi Sultan</span>
      <Link to="/">Homepage</Link>
      <Link to="/about">About</Link>
      <Link to="/blog">Blog</Link>
      <Link to="/product">Product</Link>
      <Link to="/login">Login</Link>
    </Header>
  )
}

export default SiteHeader;
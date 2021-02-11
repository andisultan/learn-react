import styled from 'styled-components';
import { COLOR_PRIMARY } from "utils/colors";

const Footer = styled.footer`
  background: ${COLOR_PRIMARY};
  padding: 30px 0;
  color: #FFFFFF;
  text-align: center;
`;

const SiteFooter = () => {
  return (
    <Footer>
      <span>Copyright &copy; {new Date().getFullYear()} Andi Sultan. All right reserved.</span>
    </Footer>
  )
}

export default SiteFooter;
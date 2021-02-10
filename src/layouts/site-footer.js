import styled from 'styled-components';
import { COLOR_PRIMARY } from "utils/colors";

const Footer = styled.footer`
  background: ${COLOR_PRIMARY};
  padding: 30px 0;
`;


const SiteFooter = () => {
  return (
    <Footer>
      <span>Copyright &copy; 2012 Andi Sultan. All right reserved.</span>
    </Footer>
  )
}

export default SiteFooter;
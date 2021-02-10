import styled from 'styled-components';
import SiteHeader from "layouts/site-header";
import SiteFooter from "layouts/site-footer";

const SiteWrapper = styled.div`
  overflow: hidden;
`;

const Main = styled.footer`
  padding: 30px 0;
`;

const Site = ({children}) => {
  return (
    <SiteWrapper>
      <SiteHeader />
      <Main>{children}</Main>
      <SiteFooter />
    </SiteWrapper>
  )
}

export default Site;
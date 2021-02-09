import { useEffect } from 'react'
import { connect } from 'react-redux';
import Button from 'components/button';
import Container from 'components/container';
import Section from 'components/section';
import { articleFetch, articleAdd } from './redux/actions/articles'

const App = ({ articleFetch, articleAdd, articles }) => {
  
  useEffect(() => {
    articleFetch();
  });

  return (
    <Section>
      <Container>
        <Button primary onClick={ () => articleAdd('Artikel Tambahan')}>Add Article</Button>
        List Artikel
        {articles && 
          articles.map( (data) => {
            return <p key={data.id}>{data.title}</p>
          })
        }
      </Container>
    </Section>
  );
}

const mapStateToProps = state => {
  return { articles: state.articleReducer.articles };
};

const mapDispatchToProps = (dispatch) => {
  return {
    articleAdd: article => dispatch(articleAdd(article)),
    articleFetch: () => dispatch(articleFetch())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

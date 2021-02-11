import { useEffect } from 'react'
import { connect } from 'react-redux';
// components
import Button from 'components/button';
import Container from 'components/container';
import Site from 'layouts/site';

import { articleFetch, articleCreate } from 'redux/actions/article';

const PageBlog = ({ articleFetch, articleCreate, articles }) => {
  
  useEffect(() => {
    articleFetch();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  const creteNewArticle = () => {
    const payload = {
      title: 'Title of Article 1',
      body: 'Body of Article 1',
    }
    articleCreate(payload);
  }

  return (
    <Site>
      <Container>
        <Button primary onClick={creteNewArticle}>Add Article</Button>
        List Artikel
        {articles.loading && <p>Loading...!</p>}
        {articles.data && 
          articles.data.map( (data) => {
            return <p key={data.id}>{data.title}</p>
          })
        }
      </Container>
    </Site>
  );
}

const mapStateToProps = state => {
  return { articles: state.articleReducer };
};

const mapDispatchToProps = (dispatch) => {
  return {
    articleCreate: article => dispatch(articleCreate(article)),
    articleFetch: () => dispatch(articleFetch())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PageBlog);

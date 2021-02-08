import { connect } from 'react-redux';
import Button from 'components/button';
import { articleAdd } from './redux/actions/articles'

const App = ({ articleAdd, articles }) => {
  return (
    <div>
      State Pertama: {articles}
      <Button primary onClick={ () => articleAdd('Artikel Tambahan')}>Add Article</Button>
    </div>
  );
}

const mapStateToProps = state => {
  return { articles: state.articleReducer.articles };
};

function mapDispatchToProps(dispatch) {
  return {
    articleAdd: article => dispatch(articleAdd(article))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

import { connect } from 'react-redux';
import { LoadMore } from './LoadMore';
import { fetchImages } from '../../store/actions';

const mapDispatchToProps = (dispatch) => {
  const fetch = () => dispatch(fetchImages());

  return { fetch };
};

export const LoadMoreContainer = connect(null, mapDispatchToProps)(LoadMore);

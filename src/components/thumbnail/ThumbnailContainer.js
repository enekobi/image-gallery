import { connect } from 'react-redux';
import { Thumbnail } from './Thumbnail';
import { toggleNavigation } from '../../store/actions';

const mapDispatchToProps = (dispatch) => {
  const navigate = () => dispatch(toggleNavigation());
  return { navigate };
};

export const ThumbnailContainer = connect(null, mapDispatchToProps)(Thumbnail);

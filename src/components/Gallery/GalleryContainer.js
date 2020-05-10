import { connect } from 'react-redux';
import { Gallery } from './Gallery';
import { getImages } from '../../store/selectors';

const mapStateToProps = (state) => {
  const images = getImages(state);
  return { images };
};

export const GalleryContainer = connect(mapStateToProps, null)(Gallery);

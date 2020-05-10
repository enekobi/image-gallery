import { connect } from 'react-redux';
import { Navigation } from './Navigation';
import { isNavigating, getCurrentImage } from '../../store/selectors';
import { toggleNavigation, goBack, goForward } from '../../store/actions';

const mapStateToProps = (state) => {
  const isOpen = isNavigating(state);
  const currentImage = getCurrentImage(state) || {};
  return { isOpen, currentImage };
};

const mapDispatchToProps = (dispatch) => {
  const close = () => dispatch(toggleNavigation());
  const previous = () => dispatch(goBack());
  const next = () => dispatch(goForward());
  return { close, previous, next };
};

export const NavigationContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Navigation);

import { connect } from 'react-redux';
import { Navigation } from './Navigation';
import { isNavigating } from '../../store/selectors';
import { toggleNavigation } from '../../store/actions';

const mapStateToProps = (state) => {
  const isOpen = isNavigating(state);
  return { isOpen };
};

const mapDispatchToProps = (dispatch) => {
  const close = () => dispatch(toggleNavigation());
  return { close };
};

export const NavigationContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Navigation);

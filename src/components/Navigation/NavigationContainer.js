import { connect } from 'react-redux';
import { Navigation } from './Navigation';
import { isNavigating } from '../../store/selectors';

const mapStateToProps = (state) => {
  const isOpen = isNavigating(state);
  return { isOpen };
};

export const NavigationContainer = connect(mapStateToProps, null)(Navigation);

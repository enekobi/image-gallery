import {
  STORE_IMAGES,
  SET_CURRENT,
  TOGGLE_NAGIVATION,
  GO_FORWARD,
  GO_BACK
} from './actions';

const storeImages = (state, newImages) => ({
  ...state,
  images: [...state.images, ...newImages]
});

const setCurrent = (state, newCurrent) => ({
  ...state,
  current: newCurrent
});

const toggleNavigation = (state) => ({
  ...state,
  navigation: !state.navigation
});

const goForward = (state) => {
  const newIndex = state.current + 1;
  return {
    ...state,
    current: newIndex === state.images.length ? 0 : newIndex
  };
};

const goBack = (state) => {
  const newIndex = state.current - 1;
  return {
    ...state,
    current: newIndex < 0 ? state.images.length - 1 : newIndex
  };
};

export const reducer = (state, action) => {
  const actualState = state || {
    images: [],
    current: -1,
    navigation: false
  };

  switch (action.type) {
    case STORE_IMAGES:
      return storeImages(actualState, action.payload);
    case SET_CURRENT:
      return setCurrent(actualState, action.payload);
    case TOGGLE_NAGIVATION:
      return toggleNavigation(actualState);
    case GO_FORWARD:
      return goForward(actualState);
    case GO_BACK:
      return goBack(actualState);
    default:
      console.warn('[Store]: unhandled action', action);
      return actualState;
  }
};

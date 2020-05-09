import { STORE_IMAGES, SET_CURRENT, TOGGLE_NAGIVATION } from './actions';

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
  nagigation: !state.navigation
});

export const reducer = (state, action) => {
  const actualState = state || {
    images: [],
    current: -1,
    nagivation: false
  };

  switch (action.type) {
    case STORE_IMAGES:
      return storeImages(actualState, action.payload);
    case SET_CURRENT:
      return setCurrent(actualState, action.payload);
    case TOGGLE_NAGIVATION:
      return toggleNavigation(actualState);
    default:
      console.warn('[Store]: unhandled action', action);
      return actualState;
  }
};

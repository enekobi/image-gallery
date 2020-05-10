import { createSelector } from 'reselect';

export const getImages = (state) => state.images;

export const getCurrentIndex = (state) => state.current;

export const isNavigating = (state) => state.nagivation;

// Examples of how can selectors can be conposed by other selectors using reselect
export const getTotalImages = createSelector(getImages, (images) => images.length);

export const getCurrentImage = createSelector(
  [getImages, getCurrentIndex],
  (images, currentIndex) => images[currentIndex]
);

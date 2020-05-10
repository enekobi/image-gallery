const makeActionCreator = (type, ...argNames) => (...args) => {
  const action = { type };
  argNames.forEach((arg, index) => {
    action[argNames[index]] = args[index];
  });
  return action;
};

export const FETCH_IMAGES = 'fetch-images';
export const fetchImages = makeActionCreator(FETCH_IMAGES);

export const STORE_IMAGES = 'store-images';
export const storeImages = makeActionCreator(STORE_IMAGES, 'payload');

export const SET_CURRENT = 'set-current';
export const setCurrent = makeActionCreator(SET_CURRENT, 'payload');

export const TOGGLE_NAGIVATION = 'toggle-navigation';
export const toggleNavigation = makeActionCreator(TOGGLE_NAGIVATION);

export const GO_FORWARD = 'go-forward';
export const goForward = makeActionCreator(GO_FORWARD);

export const GO_BACK = 'go-back';
export const goBack = makeActionCreator(GO_BACK);

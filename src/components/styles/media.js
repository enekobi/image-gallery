const sizes = {
  small: '650px',
  medium: '960px',
  big: '1260px'
};

export const breakpoints = {
  tiny: `(max-width: ${sizes.small})`,
  small: `(min-width: ${sizes.small}) and (max-width: ${sizes.medium})`,
  medium: `(min-width: ${sizes.medium}) and (max-width: ${sizes.big})`,
  wide: `(min-width: ${sizes.big})`
};

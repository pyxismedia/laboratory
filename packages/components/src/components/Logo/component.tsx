import React from 'react';

const Logo = ({ pathname, className, styled: { A } }) => (
  <A to={pathname} className={className} />
);

export default Logo;

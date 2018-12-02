import React from 'react';

export const Logo = ({ pathname, className, styled: { A } }) => (
  <A to={pathname} className={className} />
);

import React, { Component } from 'react';

/**
 * Logo properties.
 */
export interface LogoProps {
  /** link to specific location */
  pathname: string;
  /** classname which represent specific styles */
  className: string;
  // Styled object contains styled components
  styled: {
    A: typeof Component
  }
}

/**
 * Logo component.
 */
export const Logo = ({ pathname, className, styled: { A } }: LogoProps) => (
  <A to={pathname} className={className}>Logo</A>
);

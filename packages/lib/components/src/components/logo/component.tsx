import React, { Component } from 'react';

/**
 * Logo properties.
 */
export interface LogoProps {
  /** link to specific location */
  pathname: string;
  link: string;
  alt: string;
  /** `styled` object contains styled components */
  styled: {
    Image: typeof Component | string,
    A: typeof Component | string,
  }
}

/**
 * Logo component.
 * 
 * @visibleName Logotype
 */
export const Logo = ({ pathname, link, alt, styled: { A, Image } }: LogoProps) => (
  <A href={link}>
    <Image src={pathname} alt={alt} />
  </A>
);

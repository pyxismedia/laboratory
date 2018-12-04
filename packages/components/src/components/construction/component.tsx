import React from 'react';
import './style.css';

/**
 * Construction properties.
 */
export interface ConstructionProps {
  /** contains image or path to image */
  logo: string;
  /** background color */
  backgroundColor: string
}

/**
 * Construction component.
 */
export const Construction = ({ logo, backgroundColor }: ConstructionProps) => (
  <div className="construction" style={{ backgroundColor }}>
    <img className="construction__image" src={logo} alt="" />
  </div>
);

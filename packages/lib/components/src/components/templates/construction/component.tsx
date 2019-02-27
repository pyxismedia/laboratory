import React from 'react';
// import './style.css';

/**
 * Construction properties.
 */
export interface ConstructionProps {
  /** contains image or path to image */
  logo: string;
  /** background color */
  backgroundColor: string
  /** contact email address */
  email: string;
  /** contact phone number */
  phone: number;
  /** title that represent big text */
  title: string;
  /** subtitle represent slogan or */
  subtitle: string;
}

/**
 * Construction component.
 */
export const Construction = ({ logo, backgroundColor, email, phone, title, subtitle }: ConstructionProps) => (
  <div className="construction" style={{ backgroundColor }}>
    <div className="construction__container">
      <>
      {logo ?
        <img className="construction__image" src={logo} alt="" /> :
        <>
          <div className="construction__title">{title}</div>
          <div className="construction__subtitle">{subtitle}</div>
        </>
      }
      </>
      <div className="contruction__contact">
        <span className="contruction__channel">
          <a className="construction__email" href={`mailto:${email}`}>{email}</a>
        </span>
        <span className="contruction__channel">{phone}</span>
      </div>
    </div>
  </div>
);

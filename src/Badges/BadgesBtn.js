import React from 'react';
import '../style.css';
import classnames from 'classnames';

export default function BadgesBtn({ name, className, color, shape }) {
  const colorClass = color && `button-${color}`;
  const shapeClass = shape && `button-${shape}`;
  const allClasses = classnames(colorClass, shapeClass, className);

  return <button className={allClasses}>Badge</button>;
}

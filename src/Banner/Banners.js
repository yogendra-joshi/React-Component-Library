import React from 'react';
import '../style.css';
import classNames from 'classnames';
import { FcApproval } from 'react-icons/fc';
import { IoIosWarning } from 'react-icons/io';
import { VscError } from 'react-icons/vsc';
import { HiOutlineInformationCircle } from 'react-icons/hi2';

export default function Banners({ title, desc, showDesc, status, className }) {
  const statusClass = status && `${status}`;
  const allClasses = classNames(statusClass, className);

  let iconComponent;

  switch (status) {
    case 'success':
      iconComponent = <FcApproval />;
      break;
    case 'warning':
      iconComponent = <IoIosWarning />;
      break;
    case 'error':
      iconComponent = <VscError />;
      break;
    case 'neutral':
      iconComponent = <HiOutlineInformationCircle />;
      break;
    default:
      iconComponent = null;
      break;
  }

  return (
    <div className={allClasses}>
      <div>
        <h3>
          {iconComponent}
          {title}
        </h3>
        {showDesc ? <p>{desc}</p> : null}
      </div>
    </div>
  );
}

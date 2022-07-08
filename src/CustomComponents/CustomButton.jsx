import React from 'react';

const CustomButton = ({title, icon, iconClass, className}) => {
  return (
   
    <button className={className}>
        {icon && <img alt='icon' className={iconClass} src={icon}/>}
        {title}
    </button>
  
  )
}

export default CustomButton
import React from 'react';
import people from './Images/people.svg'

const Carousel = () => {
  return (
    <div className='hidden lg:block lg:flex justify-center items-center w-[60%]'>
        <div>
            <p className='text-[#2D74DA] text-2xl mb-4'>Organize your customer information</p>
            <img  src={people} alt="people" />
            <div className='flex justify-center items-center mt-10'>
                <i className='fa fa-circle text-[8px] text-[#2D74DA]'></i>
                <i className='fa fa-circle text-[8px] text-gray-300 ml-1'></i>
                <i className='fa fa-circle text-[8px] text-gray-300 ml-1'></i>
                <i className='fa fa-circle text-[8px] text-gray-300 ml-1'></i>
            </div>
        </div>
    </div>
  )
}

export default Carousel
import React from 'react';
const Title = (title: { title: string }) => {
    return (
        <div className='relative my-5'>
            <p className='first-letter:text-[#ff6a00]  text-xl font-semibold'>{title.title}</p>
            <div className=' absolute left-[-10px] top-0 rounded-full bg-gradient-to-r from-[#ffd58c] h-[30px] w-[30px] '></div>
        </div>
    );
};

export default Title;
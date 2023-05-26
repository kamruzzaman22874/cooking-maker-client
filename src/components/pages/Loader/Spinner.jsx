import React from 'react';

const Spinner = () => {
    return (
		
				<div className='h-screen flex justify-center items-center bg-[#0a192f]'>
					<div className='w-36 h-36 text-3xl border-4 border-dashed rounded-full animate-spin dark:pink-600'></div>
				</div>
		);
};

export default Spinner;
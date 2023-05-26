import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/errorPage.jpg';

const ErrorPage = () => {
	return (

// Explore error handle page 
		
		<div className='w-full h-screen py-20 bg-[#0a192f]'>
			<img className='w-[500px]  mx-auto' src={logo} alt='' />
			<div className='flex justify-center mt-6'>
				<button>
					<Link
						to='/'
						className=' w-full mx-auto rounded-full bg-amber-400 px-4 py-3 mt-4 text-md text-pink-600 font-semibold hover:bg-amber-600'>
						Back to home
					</Link>
				</button>
			</div>
		</div>
	);
};

export default ErrorPage;

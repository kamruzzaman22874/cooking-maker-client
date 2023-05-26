import React, { useContext, useEffect, useState } from 'react';
import banner from '../../../assets/home-paae.jpg';
import Banner from '../../Banner/Banner';
import Spinner from '../../pages/Loader/Spinner';
import { AuthContext } from '../../Providers/AuthProvider';

const HomePage = () => {
	const { loading } = useContext(AuthContext);
	
	// banner section use backgroundImage and some information
	return (
		<div>
			<div
				className='hero min-h-screen z-2 bg-[#0a192f] bg-blend-overlay bg-cover object-cover'
				style={{
					backgroundImage: `url("${banner}")`,
				}}>
				<div className='hero-overlay bg-opacity-20'></div>
				<div className='hero-content text-center text-neutral-content'>
					<div className='md:mt-10 mt-20'>
						<h1 className='mb-5 md:text-6xl text-4xl font-bold text-gray-400 '>
							Cooking Maker
						</h1>
						<p className='mb-5 mx-auto text-justify text-bg-gray-300 md:text-lg md:w-3/4'>
							It is perhaps in the domain of food that Britain’s sentinels of
							class stand guard the most sternly, dobbing people in for
							perceived culinary transgressions and demarcating what might, in a
							nod to Nancy Mitford, be called W (working-class) and non-W
							foods,” writes Jonathan Nunn. “It’s a bizarrely infantilising
							view, one that assumes that an interest in better or different
							foodstuffs is class treason and that puts people in clearly
							defined boxes, just as much as the identity politics that these
							commentators supposedly rail against.”
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HomePage;

import React from 'react';
import { FaStar, FaStarHalf } from 'react-icons/fa';
import Rating from 'react-rating';
import recipe1 from '../../../../assets/recipe1.jpg';
import recipe2 from '../../../../assets/recipe2.jpg';
import recipe3 from '../../../../assets/recipe3.jpg';
import recipe4 from '../../../../assets/recipe4.jpg';

// first unique section here under the home page

const UniquePage = () => {
	return (
		<div className='md:px-32 px-4 bg-[#0a192f] pb-6'>
			<h2 className='text-3xl py-5 text-gray-300'>
				Most Popular Recipes This Week
			</h2>
			<div className='grid md:grid-cols-2 sm:grid-1 gap-3 '>
				<div className='card card-side bg-base-100 md:h-48 h-56 shadow-xl'>
					<figure>
						<img
							className='md:w-48 md:h-36 h-28 md:px-6 px-2 rounded'
							src={recipe1}
							alt='Movie'
						/>
					</figure>
					<h1 className='flex items-center text-7xl'>1</h1>
					<div className='card-body '>
						<h2 className=' text-2xl font-bold text-gray-300 bg-black text-center rounded'>
							Italian Food
						</h2>
						<p className='text-3xl font-semibold'>Porchetta Recipe</p>

						<Rating
							className='text-yellow-400 text-xl'
							placeholderRating={3.4}
							emptySymbol={<FaStarHalf></FaStarHalf>}
							placeholderSymbol={<FaStar></FaStar>}
							readonly
							fullSymbol={<FaStar></FaStar>}></Rating>
					</div>
				</div>
				<div className='card card-side bg-base-100 md:h-48 h-56 shadow-xl'>
					<figure>
						<img
							className='md:w-48 w-36 md:h-32 h-28 md:px-6 px-2 rounded'
							src={recipe2}
							alt='Movie'
						/>
					</figure>
					<h1 className='flex items-center text-7xl'>2</h1>
					<div className='card-body'>
						<h2 className='text-gray-300 text-2xl font-bold bg-black text-center rounded'>
							30 Minutes Or Less
						</h2>
						<p className='text-2xl font-semibold'>The Best Egg Carry</p>

						<Rating
							className='text-yellow-400 text-xl'
							placeholderRating={3.4}
							emptySymbol={<FaStarHalf></FaStarHalf>}
							placeholderSymbol={<FaStar></FaStar>}
							readonly
							fullSymbol={<FaStar></FaStar>}></Rating>
					</div>
				</div>
				<div className='card card-side bg-base-100 md:h-48 h-56 shadow-xl'>
					<figure>
						<img
							className='md:w-48 md:h-36 h-28 md:px-6 px-2 rounded'
							src={recipe3}
							alt='Movie'
						/>
					</figure>
					<h1 className='flex items-center text-7xl'>3</h1>
					<div className='card-body '>
						<h2 className=' text-2xl font-bold text-gray-300 bg-black text-center rounded'>
							Mexican Food
						</h2>
						<p className='text-xl font-semibold'>The Best Chicken Thinga</p>

						<Rating
							className='text-yellow-400 text-xl'
							placeholderRating={3.4}
							emptySymbol={<FaStarHalf></FaStarHalf>}
							placeholderSymbol={<FaStar></FaStar>}
							readonly
							fullSymbol={<FaStar></FaStar>}></Rating>
					</div>
				</div>
				<div className='card card-side bg-base-100 md:h-48 h-56 shadow-xl'>
					<figure>
						<img
							className='md:w-48 md:h-36 h-28 md:px-6 px-2 rounded'
							src={recipe4}
							alt='Movie'
						/>
					</figure>
					<h1 className='flex items-center text-7xl'>4</h1>
					<div className='card-body'>
						<h2 className='text-gray-300 text-2xl font-bold bg-black text-center rounded'>
							Baking
						</h2>
						<p className='text-xl font-semibold'>Tiktok Chinnamon Rolls</p>

						<Rating
							className='text-yellow-400 text-xl'
							placeholderRating={3.4}
							emptySymbol={<FaStarHalf></FaStarHalf>}
							placeholderSymbol={<FaStar></FaStar>}
							readonly
							fullSymbol={<FaStar></FaStar>}></Rating>
					</div>
				</div>
			</div>
		</div>
	);
};

export default UniquePage;

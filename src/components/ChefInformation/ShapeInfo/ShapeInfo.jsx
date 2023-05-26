import React, { useContext } from 'react';
import { HiHeart, HiThumbUp } from 'react-icons/hi';
import LazyLoad from 'react-lazy-load';
import { Link } from 'react-router-dom';
import Spinner from '../../pages/Loader/Spinner';
import { AuthContext } from '../../Providers/AuthProvider';

const ShapeInfo = ({ shape }) => {
	const { loading } = useContext(AuthContext);
	if (loading) {
		<Spinner></Spinner>;
	}
	const {
		id,
		chef_name,
		chef_picture,
		years_of_experience,
		number_of_recipes,
		likes,
	} = shape;
	return (
		<div className=''>
			<div className='card w-full shadow-xl text-gray-300 bg-[#0a192f]'>
				{/* use Lazy load  */}
				<LazyLoad>
					<figure>
						<img
							className='w-full h-[300px] rounded md:p-6 hover:animate-ping'
							src={chef_picture}
							alt='img'
						/>
					</figure>
				</LazyLoad>
				<div className='card-body'>
					<h2 className='card-title'>{chef_name}</h2>
					<p className='text-lg font-semibold'>
						<span className='text-lg font-bold'>Experience</span> : {years_of_experience} Years
					</p>
					<p className='text-lg font-semibold'>
						Numbers of recipes: {number_of_recipes} Item
					</p>
					<p className='flex items-center gap-3 mb-4'>
						<HiHeart className='text-pink-700 text-2xl'></HiHeart>
						<span className='text-xl font-bold'>{likes}</span>
					</p>

					<Link
						to={`/recipes/${id}`}
						className='w-full text-center bg-pink-600 hover:bg-pink-900 py-3 rounded text-gray-300 font-semibold'>
						View Recipe
					</Link>
				</div>
			</div>
		</div>
	);
};

export default ShapeInfo;

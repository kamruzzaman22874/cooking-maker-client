import React, { useContext } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { HiHeart } from 'react-icons/hi';
import LazyLoad from 'react-lazy-load';
import { useLoaderData, useParams } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import Recipe from '../Recipe/Recipe';

const RecipeInfo = () => {
	const [chefData, setChefData] = useState({});
	const { id } = useParams();
	const { loading } = useContext(AuthContext);

	if (loading) {
		return (
			<div className='h-screen flex justify-center items-center bg-[#0a192f]'>
				<div className='w-36 h-36 text-3xl border-4 border-dashed rounded-full animate-spin dark:pink-600'></div>
			</div>
		);
	}

	// data  loaded for the specific chef and their information

	useEffect(() => {
		fetch('https://shape-recipe-server-kamruzzaman22874.vercel.app/shapes')
			.then((res) => res.json())
			.then((data) => setChefData(data.find((chef) => chef.id == id)));
	}, []);
	const recipesData = useLoaderData();

	const {
		chef_name,
		description,
		chef_picture,
		likes,
		number_of_recipes,
		years_of_experience,
	} = chefData;

	return (
		<div>
	
			<div className='md:px-36 p-4 shadow-md dark:bg-gray-900 mt-24  dark:text-gray-100 '>
				<div className='space-y-4'>
					<div className='w-full '>
						<LazyLoad>
							<img
								src={chef_picture}
								alt=''
								className='block object-cover w-full h-[30rem] rounded-md dark:bg-gray-500'
							/>
						</LazyLoad>
					</div>
					<div className='space-y-2'>
						<p rel='noopener noreferrer' className='block'>
							<h3 className='text-xl dark:text-violet-400 font-bold'>
								{chef_name}
							</h3>
							<p className='leading-snug dark:text-gray-400 text-lg font-semibold'>
								{description}
							</p>
							<h1>
								<span className='text-lg font-bold'>Recipes :</span>
								<span className='text-md font-semibold'>
									 {number_of_recipes}
								</span>
								<span className='text-lg font-semibold'> Items</span>
							</h1>
							<h1>
								<span className='text-lg font-bold'>Experience : </span>
								<span className='text-md font-semibold'>
									{years_of_experience} Years
								</span>
							</h1>
							<p className='flex items-center gap-2 '>
								<HiHeart className='text-pink-600 text-3xl mt-1'></HiHeart>
								<span className='text-xl font-bold'>{likes}</span>
							</p>
						</p>
					</div>
				</div>
			</div>
			{/* send single recipe data   */}
			<div className='mt-5 gap-5 md:px-36'>
				{recipesData.map((recipe) => (
					<Recipe key={recipe.id} recipe={recipe}></Recipe>
				))}
			</div>
		</div>
	);
};

export default RecipeInfo;

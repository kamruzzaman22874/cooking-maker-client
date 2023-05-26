import React, { useContext } from 'react';
import { useState } from 'react';
import { FaBookmark, FaStar, FaStarHalf } from 'react-icons/fa';
import { FcApproval } from 'react-icons/fc';
import LazyLoad from 'react-lazy-load';
import Rating from 'react-rating';
import { toast } from 'react-toastify';
import Spinner from '../../pages/Loader/Spinner';
import { AuthContext } from '../../Providers/AuthProvider';

// show all chef recipes data

const Recipe = ({ recipe }) => {
	const [button, setButton] = useState(false);
	const { recipeName, recipeImg, method, ingredients, rating } = recipe;
	const { loading } = useContext(AuthContext);
	console.log(recipe);

// show spinner 

	if (loading) {
		return <Spinner></Spinner>;
	}

	const handleFavorite = () => {
		setButton(true);
		toast.success('Your favorite item is added');
	};
	return (
		<div className='card h-full w-full bg-base-100 shadow-xl my-5'>
			<LazyLoad>
				<figure>
					<img
						className='w-[50rem] h-[25rem] object-cover rounded-lg p-6 '
						src={recipeImg}
						alt='recipe'
					/>
				</figure>
			</LazyLoad>
			<div className='card-body'>
				<h2 className='card-title'>{recipeName}</h2>
				<h1>
					<p>
						<span className='text-xl font-bold'>ingredients :</span>
						{ingredients.slice(0, 5).map((recipe, idx) => (
							<h1 className='flex items-center'>
								<FcApproval></FcApproval>
								{recipe}
							</h1>
						))}
					</p>
				</h1>
				<p className='w-3/4'> <span className='text-xl font-bold'>Method : </span>{method}</p>
				<div className='flex items-center '>
					<p>
						<Rating
							className='text-yellow-400 text-xl'
							placeholderRating={rating}
							value={Math.round(rating | 0)}
							emptySymbol={<FaStarHalf></FaStarHalf>}
							placeholderSymbol={<FaStar></FaStar>}
							readonly
							fullSymbol={<FaStar></FaStar>}></Rating>
						<span className='ml-3 text-lg font-semibold'>{rating}</span>
					</p>
					<div className='card-actions justify-end'>
						<button onClick={handleFavorite} disabled={button}>
							{button ? (
								<FaBookmark className='text-2xl text-gray-300'></FaBookmark>
							) : (
								<FaBookmark className='text-2xl text-yellow-500'></FaBookmark>
							)}
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Recipe;
